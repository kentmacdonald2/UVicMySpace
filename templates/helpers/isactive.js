module.exports = function(section, subsection) {
    for (var key in section.subsections){
        if (section.subsections[key] == subsection) return true;
    }
    return false;
};