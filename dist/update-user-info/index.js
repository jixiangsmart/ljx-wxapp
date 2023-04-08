import { VantComponent } from '../common/component';
VantComponent({
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
        onChooseAvatar(e) {
            console.log('eeeee', e);
            const { avatarUrl } = e.detail;
            this.setData({
                avatarUrl,
            });
        },
    },
});
