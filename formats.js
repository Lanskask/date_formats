export const formats = [
    {
        regex: /^\d{4}-\d{2}-\d{2}$/,
        format: "yyyy-MM-dd",
        usage: "International standard (ISO 8601); commonly used in databases and software development.",
        name: "ISO Standard"
    },
    {
        regex: /^\d{8}$/,
        format: "yyyyMMdd",
        usage: "International standard (ISO 8601); used in computing and data processing.",
        name: "Compact ISO Date"
    },
    {
        regex: /^[A-Za-z]+\s\d{1,2},\s\d{4}$/,
        format: "MMMM dd, yyyy",
        usage: "Used in the United States and Canada for formal writing and publications.",
        name: "US Formal Date"
    },
    {
        regex: /^\d{1,2}\s[A-Za-z]+\s\d{4}$/,
        format: "dd MMMM yyyy",
        usage: "Common in the United Kingdom and other English-speaking countries for formal documents.",
        name: "UK Formal Date"
    },
    {
        regex: /^\d{2}\/\d{2}\/\d{4}$/,
        format: "dd/MM/yyyy",
        usage: "Common in the United Kingdom, Australia, and most European countries for general purposes.",
        name: "UK/Common Date"
    },
    {
        regex: /^[A-Za-z]+\s\d{1,2}(st|nd|rd|th),\s\d{4}$/,
        format: "MMMM do, yyyy",
        usage: "Used in the United States and Canada for invitations and formal announcements.",
        name: "US Invitation Date"
    },
    {
        regex: /^\d{1,2}(st|nd|rd|th)\s[A-Za-z]+\s\d{4}$/,
        format: "do MMMM yyyy",
        usage: "Common in the United Kingdom for formal invitations and literary contexts.",
        name: "UK Invitation Date"
    },
    // official
    {
        regex: /^\d{2}-\d{2}-\d{4}$/,
        format: "dd-MM-yyyy",
        usage: "Used in various European countries for official documents and daily communication.",
        name: "European Standard"
    },
    {
        regex: /^\d{2}\.\d{2}\.\d{4}$/,
        format: "dd.MM.yyyy",
        usage: "Standard in Germany, Austria, and Switzerland for official records and correspondence.",
        name: "German Standard"
    },
    {
        regex: /^\d{2}\/\d{2}\/\d{4}$/,
        format: "MM/dd/yyyy",
        usage: "Standard in the United States for official documents and records.",
        name: "US Official Date"
    },
    {
        regex: /^\d{2}-\d{2}-\d{4}$/,
        format: "MM-dd-yyyy",
        usage: "Common in the United States for official documents and records.",
        name: "US Official Dash Date"
    },
    // informal
    {
        regex: /^\d{2}\/\d{2}\/\d{2}$/,
        format: "MM/dd/yy",
        usage: "Common in the United States for informal contexts and handwritten notes.",
        name: "US Informal Date"
    },
    {
        regex: /^[A-Za-z]{3}\s\d{1,2},\s\d{4}$/,
        format: "MMM dd, yyyy",
        usage: "Used in the United States for informal communication and media.",
        name: "US Media Date"
    },
    {
        regex: /^\d{1,2}\s[A-Za-z]{3}\s\d{4}$/,
        format: "dd MMM yyyy",
        usage: "Common in the United Kingdom and Australia for informal contexts.",
        name: "UK Informal Date"
    },
    {
        regex: /^[A-Za-z]{3}\s\d{1,2}(st|nd|rd|th),\s\d{4}$/,
        format: "MMM do, yyyy",
        usage: "Used in the United States for informal invitations and announcements.",
        name: "US Informal Invitation Date"
    },
    {
        regex: /^\d{1,2}(st|nd|rd|th)\s[A-Za-z]{3}\s\d{4}$/,
        format: "do MMM yyyy",
        usage: "Common in the United Kingdom for informal invitations and literary works.",
        name: "UK Informal Literary Date"
    },
    {
        regex: /^\d{2}-\d{2}-\d{2}$/,
        format: "MM-dd-yy",
        usage: "Common in the United States for informal contexts and shorthand notes.",
        name: "US Shorthand Date"
    },
    {
        regex: /^\d{2}\/\d{2}\/\d{2}$/,
        format: "dd/MM/yy",
        usage: "Common in the United Kingdom and Australia for informal contexts.",
        name: "UK Shorthand Date"
    },
    {
        regex: /^\d{2}-\d{2}-\d{2}$/,
        format: "dd-MM-yy",
        usage: "Used in various European countries for informal communication.",
        name: "European Shorthand Date"
    },
    {
        regex: /^\d{2}\.\d{2}\.\d{2}$/,
        format: "dd.MM.yy",
        usage: "Standard in Germany, Austria, and Switzerland for informal contexts.",
        name: "German Shorthand Date"
    },
    {
        regex: /^\d{1,2}\/\d{1,2}\/\d{4}$/,
        format: "M/d/yyyy",
        usage: "Common in the United States for informal contexts and handwritten notes.",
        name: "US Informal Date"
    },
    {
        regex: /^\d{1,2}\/\d{1,2}\/\d{2}$/,
        format: "M/d/yy",
        usage: "Common in the United States for informal contexts and shorthand notes.",
        name: "US Short Informal Date"
    },
    {
        regex: /^[A-Za-z]{3}\s\d{1,2},\s\d{2}$/,
        format: "MMM dd, yy",
        usage: "Used in the United States for informal communication and media.",
        name: "US Short Media Date"
    },
    {
        regex: /^\d{1,2}\s[A-Za-z]{3}\s\d{2}$/,
        format: "dd MMM yy",
        usage: "Common in the United Kingdom and Australia for informal contexts.",
        name: "UK Short Informal Date"
    },
    {
        regex: /^[A-Za-z]{3}\s\d{1,2}(st|nd|rd|th),\s\d{2}$/,
        format: "MMM do, yy",
        usage: "Used in the United States for informal invitations and announcements.",
        name: "US Short Invitation Date"
    },
    {
        regex: /^\d{1,2}(st|nd|rd|th)\s[A-Za-z]{3}\s\d{2}$/,
        format: "do MMM yy",
        usage: "Used in the United Kingdom for informal invitations and literary works.",
        name: "UK Short Literary Date"
    },
    {
        regex: /^[A-Za-z]+\s\d{1,2},\s\d{2}$/,
        format: "MMMM dd, yy",
        usage: "Common in the United States and Canada for informal writing and publications.",
        name: "US Informal Publication Date"
    },
    {
        regex: /^\d{1,2}\s[A-Za-z]+\s\d{2}$/,
        format: "dd MMMM yy",
        usage: "Used in the United Kingdom and other English-speaking countries for informal documents.",
        name: "UK Informal Document Date"
    },
    {
        regex: /^[A-Za-z]+\s\d{1,2}(st|nd|rd|th),\s\d{2}$/,
        format: "MMMM do, yy",
        usage: "Common in the United States and Canada for informal invitations and announcements.",
        name: "US Short Announcement Date"
    },
    {
        regex: /^\d{1,2}(st|nd|rd|th)\s[A-Za-z]+\s\d{2}$/,
        format: "do MMMM yy",
        usage: "Used in the United Kingdom for informal invitations and literary contexts.",
        name: "UK Short Literary Invitation Date"
    },
    {
        regex: /^\d{1,2}\/\d{1,2}\/\d{1,2}$/,
        format: "M/d/y",
        usage: "Common in the United States for informal contexts and shorthand notes.",
        name: "US Shorthand Note Date"
    },
    // less common
    {
        regex: /^\d{2}\.\d{2}\.\d{4}$/,
        format: "MM.dd.yyyy",
        usage: "Less common; may be used in various countries for official documents.",
        name: "Less Common Official Dot Date"
    },
    {
        regex: /^\d{1,2}\.\d{1,2}\.\d{4}$/,
        format: "M.d.yyyy",
        usage: "Less common; may be used in various countries for informal contexts.",
        name: "Less Common Dot Date"
    },
    {
        regex: /^\d{2}\.\d{2}\.\d{2}$/,
        format: "MM.dd.yy",
        usage: "Used in the United States for informal contexts; less common.",
        name: "Less Common US Dot Date"
    },
    {
        regex: /^\d{1,2}-\d{1,2}-\d{1,2}$/,
        format: "M-d-y",
        usage: "Used in the United States for informal contexts; less common.",
        name: "Less Common US Dash Date"
    },
    {
        regex: /^\d{1,2}\.\d{1,2}\.\d{2}$/,
        format: "M.d.yy",
        usage: "Less common; may be used in various countries for informal contexts.",
        name: "Less Common Short Dot Date"
    },
    {
        regex: /^\d{1,2}\.\d{1,2}\.\d{1,2}$/,
        format: "M.d.y",
        usage: "Less common; may be used in various countries for informal contexts.",
        name: "Less Common Minimal Dot Date"
    },
    {
        regex: /^\d{1,2}-\d{1,2}-\d{4}$/,
        format: "M-d-yyyy",
        usage: "Used in the United States for informal contexts; less common.",
        name: "Less Common US Full Dash Date"
    },
    {
        regex: /^\d{1,2}-\d{1,2}-\d{2}$/,
        format: "M-d-yy",
        usage: "Used in the United States for informal contexts; less common.",
        name: "Less Common US Short Dash Date"
    }
];
