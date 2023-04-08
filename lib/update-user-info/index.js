"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
(0, component_1.VantComponent)({
    props: {
        avatarUrl: {
            type: String,
            default: ''
        },
        nickName: {
            type: String,
            default: ''
        },
        buttonBgc: {
            type: String,
            value: '#D90000'
        },
    },
    methods: {
        onChooseAvatar: function (e) {
            var avatarUrl = e.detail.avatarUrl;
            this.setData({
                avatarUrl: avatarUrl,
            });
            this.triggerEvent('uploadavatar', avatarUrl);
        },
        formSubmit: function (e) {
            this.triggerEvent('submit', e);
        }
    },
});
