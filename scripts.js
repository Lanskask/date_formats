import { parse, isValid, format as formatFn } from 'https://cdn.jsdelivr.net/npm/date-fns@2.29.2/esm/index.js';

import { formats } from './formats.js';

document.getElementById("inputDate").addEventListener("input", handleDateInput);

function handleDateInput() {
    const input/*: string*/ = document.getElementById("inputDate").value.trim();
    const formatTable/*: HTMLElement*/ = document.getElementById("formatTable");

    if (!input) {
        const resultElement/*: HTMLElement*/ = document.getElementById("result");
        resultElement.innerText = "";

        formatTable.style.display = "none";
        return;
    }

    const detectedFormat/*: string*/ = detectDateFormat(input);
    displayDetectedFormat(detectedFormat);
    if (detectedFormat !== "Unknown Format") {
        displayAllFormats(input, detectedFormat);
    } else {
        formatTable.style.display = "none";
    }
}

function detectDateFormat(input/*: string*/)/*: string*/ {
    let detectedFormat = "Unknown Format";
    for (const {regex, format} of formats) {
        if (regex.test(input)) {
            detectedFormat = format;
            const parts/*: RegExpMatchArray | null*/ = input.match(regex);
            if (detectedFormat.includes("MM") && parts) {
                const month/*: number*/ = parseInt(parts[1], 10);
                const day/*: number*/ = parseInt(parts[2], 10);
                if (month > 12 && day > 12) {
                    document.getElementById("result").innerText = "Error: Month cannot be greater than 12.";
                    return "Unknown Format";
                } else if (month > 12) {
                    detectedFormat = detectedFormat.replace("MM", "DD").replace("DD", "MM");
                }
            }
            break;
        }
    }
    return detectedFormat;
}

function displayDetectedFormat(format/*: string*/)/*: void*/ {
    const resultElement/*: HTMLElement*/ = document.getElementById("result");
    resultElement.innerText = `Detected Format: ${format}`;
}

export function displayAllFormats(input/*: string*/, detectedFormat/*: string*/) {
    const date/*: Date*/ = parse(input, detectedFormat, new Date());
    const formatTable/*: HTMLElement*/ = document.getElementById("formatTable");

    if (isValid(date)) {
        const tableBody/*: HTMLElement*/ = document.getElementById("tableBody");

        tableBody.innerHTML = "";
        formats.forEach(formatItem => {
            const value/*: String | **/ = formatFn(date, formatItem.format)

            const row/*: HTMLTableRowElement*/ = document.createElement("tr");
            row.innerHTML = `
                   <td title="${formatItem.usage}">${formatItem.name}: ${formatItem.format}</td>
                   <td>${value}</td>`;
            tableBody.appendChild(row);
        });

        formatTable.style.display = "table";
    } else {
        const resultElement/*: HTMLElement*/ = document.getElementById("result");
        resultElement.innerText = "Invalid Date";

        formatTable.style.display = "none";
    }
}