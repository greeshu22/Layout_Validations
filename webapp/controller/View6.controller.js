sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.anjali.layout.controller.View6", {
            onInit: function () {

            },
            onBack:function(){
                this.getOwnerComponent().onNavBack();
            },
            onPressSubmit:function(){
                var empId = this.getView().byId("idEmpid").getValue();
                var empName = this.getView().byId("idName").getValue();
                var empDesig = this.getView().byId("idDesig").getValue();
                var empSkill = this.getView().byId("idSkill").getValue();
                var empPhone = this.getView().byId("idPhone").getValue();
                var empEmailId = this.getView().byId("idEmail").getValue();
                var empdoj = this.getView().byId("idDoj").getDateValue();
                var today = new Date();
                if (empId === "") {
                    this.getView().byId("idEmpid").setValueState("Error");
                    this.getView().byId("idEmpid").setValueStateText("Employee id is mandatory");
                } else {
                    var empIdReg = /^[0-9]+$/;
                    if (!empId.match(empIdReg)) {
                        this.getView().byId("idEmpid").setValueState("Error");
                        this.getView().byId("idEmpid").setValueStateText("Employee ID should be between[0-9]")
                    }
                    else{
                        this.getView().byId("idEmpid").setValueState("None"); 
                    }
                }

                if (empName === "") {
                    this.getView().byId("idName").setValueState("Error");
                    this.getView().byId("idName").setValueStateText("Employee name is mandatory");
                } else {
                    var empNameReg = /^[a-zA-Z]+$/;
                    if (!empName.match(empNameReg)) {
                        this.getView().byId("idName").setValueState("Error");
                        this.getView().byId("idName").setValueStateText("Employee name must be alphabetical");
                    } else {
                        this.getView().byId("idName").setValueState("None"); 
                    }
                }


                if (empDesig === "") {
                    this.getView().byId("idDesig").setValueState("Error");
                    this.getView().byId("idDesig").setValueStateText("Employee designation is mandatory");
                } else {
                    var empDesigReg = /^[a-zA-Z]+$/;
                    if (!empDesig.match(empDesigReg)) {
                        this.getView().byId("idDesig").setValueState("Error");
                        this.getView().byId("idDesig").setValueStateText("Employee designation must be alphabetical");
                    } else {
                        this.getView().byId("idDesig").setValueState("None"); 
                    }
                }


                
                if (empSkill === "") {
                    this.getView().byId("idSkill").setValueState("Error");
                    this.getView().byId("idSkill").setValueStateText("Employee skill is mandatory");
                } else {
                    var empSkillReg = /^[a-zA-Z]+$/;
                    if (!empSkill.match(empSkillReg)) {
                        this.getView().byId("idSkill").setValueState("Error");
                        this.getView().byId("idSkill").setValueStateText("Employee skill must be alphabetical");
                    } else {
                        this.getView().byId("idSkill").setValueState("None"); 
                    }
                }


                
                
                if (empPhone === "") {
                    this.getView().byId("idPhone").setValueState("Error");
                    this.getView().byId("idPhone").setValueStateText("Employee Phone no is mandatory");
                } else {
                    var empPhoneReg = /^[0-9]+$/;
                    if (!empPhone.match(empPhoneReg)) {
                        this.getView().byId("idPhone").setValueState("Error");
                        this.getView().byId("idPhone").setValueStateText("Employee Phone no must be numerical");
                    } else {
                        this.getView().byId("idPhone").setValueState("None"); 
                    }
                }

                if (empEmailId === "") {
                    this.getView().byId("idEmail").setValueState("Error");
                    this.getView().byId("idEmail").setValueStateText("Employee email id is mandatory");
                } else {
                    var empEmailIdReg = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
                    if (!empEmailId.match(empEmailIdReg)) {
                        this.getView().byId("idEmail").setValueState("Error");
                        this.getView().byId("idEmail").setValueStateText("Employee email id must be vaild one ");
                    } else {
                        this.getView().byId("idEmail").setValueState("None"); 
                    }
                }

                if (empdoj === null) {
                    this.getView().byId("idDoj").setValueState("Error");
                    this.getView().byId("idDoj").setValueStateText("Employee DOJ is mandatory");
                } else {
                    if(empdoj < today){
                        this.getView().byId("idDoj").setValueState("Error");
                        this.getView().byId("idDoj").setValueStateText("Employee DOJ must not be less than today's date");  
                    }
                    else {
                        this.getView().byId("idDoj").setValueState("None"); 
                    }
                }




            }
        });
    });
