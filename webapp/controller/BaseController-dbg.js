sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("bpmaint.bpmaint.controller.BaseController", {
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("ToBPList", {}, true);
			}
		},

		attachRoute: function (sRoute, fRouteMatched) {
			this.getRouter().getRoute(sRoute).attachPatternMatched(fRouteMatched, this);
		},

		getText: function (sTextId, aArgs) {
			var oView = this.getView();
			var oModel = oView.getModel("i18n");

			if (!oModel) {
				oModel = sap.ui.model.resource.ResourceModel({
					bundleName: "bpmaint.bpmaint.i18n.i18n"
				});
				
				oView.setModel(oModel, "i18n");
			}
			
			return oModel.getResourceBundle().getText(sTextId, aArgs);
		}
	});
});