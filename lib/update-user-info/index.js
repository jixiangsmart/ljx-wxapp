"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var button_1 = require("../mixins/button");
var version_1 = require("../common/version");
var mixins = [button_1.button];
if ((0, version_1.canIUseFormFieldButton)()) {
    mixins.push('wx://form-field-button');
}
(0, component_1.VantComponent)({
    mixins: mixins,
    classes: ['hover-class', 'loading-class'],
    data: {
        avatarUrl: '',
    },
    props: {
        text: String,
        ljxTextShow: {
            type: Boolean,
            value: false,
        },
    },
    methods: {
        onChooseAvatar: function (e) {
            console.log('eeeee', e);
            var avatarUrl = e.detail.avatarUrl;
            this.setData({
                avatarUrl: avatarUrl,
            });
        }
    },
});
