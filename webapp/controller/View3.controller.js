sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.anjali.layout.controller.View3", {
            onInit: function () {

            },
            onBack:function(){
                this.getOwnerComponent().onNavBack();
            }
        });
    });
