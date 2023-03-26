import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { canIUseFormFieldButton } from '../common/version';
const mixins = [button];
if (canIUseFormFieldButton()) {
    mixins.push('wx://form-field-button');
}
VantComponent({
    mixins,
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
        onChooseAvatar(e) {
            console.log('eeeee', e);
            const { avatarUrl } = e.detail;
            this.setData({
                avatarUrl,
            });
        }
    },
});
