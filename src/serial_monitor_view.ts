class SerialMonitorView{
    $_logOutputContainerId:string = "serial_monitor_log_output_view_container";
    $_logOutputContainer:JQuery<HTMLElement>;
    $_currentOutputLineContainer:JQuery<HTMLElement>;
    $_container:JQuery<HTMLElement>;

    constructor(containerId:string){
        this.$_container = $(`#${containerId}`);
        this.initElements();
    }


    initElements(){
        this.$_logOutputContainer = $("<div>").attr("id", this.$_logOutputContainerId);
        this.$_currentOutputLineContainer = $("<div>");
        this.$_logOutputContainer.prepend(this.$_currentOutputLineContainer);

        this.$_container.append(this.$_logOutputContainer);
    }

    initStyle(){
        this.$_logOutputContainer.css({
            "flex-grow": "1",
            "overflow-y": "scroll",
            "overflow-x": "hidden",
            "padding": "10px",
        })
    }

    clear(){
        this.$_logOutputContainer.empty();
        this.$_currentOutputLineContainer = $("<div>");
        this.$_logOutputContainer.prepend(this.$_currentOutputLineContainer);
    }

    print(value:string){
        this.$_currentOutputLineContainer.text(this.$_currentOutputLineContainer.text() + value)
    }
    printNewLine(){
        this.$_currentOutputLineContainer = $("<div>");
        this.$_logOutputContainer.prepend(this.$_currentOutputLineContainer);
    }
}

export default SerialMonitorView;