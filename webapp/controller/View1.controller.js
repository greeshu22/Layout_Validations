sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.anjali.layout.controller.View1", {
            onInit: function () {

            },
            onButtonToView2:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            },
            onButtonToView3:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView3");
            },
            onButtonToView4:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView4");
            },
            onButtonToView5:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView5");
            },
            onButtonToView6:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView6");  
            }
        });
    });
