sap.ui.define([
	"bpmaint/bpmaint/controller/BaseController",
], function (BaseController) {
	"use strict";

	return BaseController.extend("bpmaint.bpmaint.controller.BPList", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf bpmaint.bpmaint.view.BPList
		 */
		onInit: function () {
			this.attachRoute("ToBPList", this.onRouteMatched);
		},

		onRouteMatched: function () {
			this.getView().getModel().refresh();
		},

		onDisplayPress: function (oEvent) {
			var oSource = oEvent.getSource();
			var oBindingContext = oSource.getBindingContext();

			this.getRouter().navTo("ToBPDisplay", {
				PartnerId: oBindingContext.getObject().PartnerId
			});
		},

		onEditPress: function (oEvent) {
			var oSource = oEvent.getSource();
			var oBindingContext = oSource.getBindingContext();

			this.getRouter().navTo("ToBPEdit", {
				PartnerId: oBindingContext.getObject().PartnerId
			});
		},

		onCreatePress: function (oEvent) {
			this.getRouter().navTo("ToBPCreate");
		},

		formatPartnerType: function (sPartnerType) {
			switch (sPartnerType) {
			case "1":
				return this.getText("txtOrganization");
			case "2":
				return this.getText("txtPerson");
			default:
				return "";
			}
		}
	});
});