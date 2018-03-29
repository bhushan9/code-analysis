var FileBuilder = function () {
    this.FileName = "";
    // Number of strings in a file.
    this.Strings = 0;
    // Number of imports in a file.
    this.ImportCount = 0;

    this.wrongFormat = 0;

    this.report = function() {
        console.log(
            ("{0}\n" +
                "~~~~~~~~~~~~\n" +
                "ImportCount {1}\t" +
                "Strings {2}\n"
            ).format(this.FileName, this.ImportCount, this.Strings));
    }
}

module.exports = FileBuilder;
