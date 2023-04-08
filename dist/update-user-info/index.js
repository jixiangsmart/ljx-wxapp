import { VantComponent } from '../common/component';
VantComponent({
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
        onChooseAvatar(e) {
            const { avatarUrl } = e.detail;
            this.setData({
                avatarUrl,
            });
            this.triggerEvent('uploadavatar', avatarUrl);
        },
        formSubmit(e) {
            this.triggerEvent('submit', e);
        }
    },
});
