"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
(0, component_1.VantComponent)({
    data: {
        avatarUrl: '',
    },
    props: {
        buttonBgc: {
            type: String,
            value: '#D90000'
        },
    },
    methods: {
        onChooseAvatar: function (e) {
            console.log('eeeee', e);
            var avatarUrl = e.detail.avatarUrl;
            this.setData({
                avatarUrl: avatarUrl,
            });
        },
    },
});
