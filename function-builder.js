var FunctionBuilder = function () {
    this.wrongFormat = 0;
    this.report = function() {
        console.log(
            (
                "wrongFormat: {0}\n\n"
            )
            .format(this.wrongFormat)
        );
    }
};

module.exports = FunctionBuilder;
