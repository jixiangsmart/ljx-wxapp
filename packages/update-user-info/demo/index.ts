import { VantComponent } from '../../common/component';

VantComponent({
  data: {
    avatarUrl: 'https://cdn.webuy.ai/static/lib/resource/2021/10/14/1634208275239_5377.jpeg',
    nickName: '海鸥'
  },
  methods: {
    uploadAvatar(e: any) {
      console.log('uploadAvatar', e)
    },
    formSubmit(e: any) {
      console.log('submit', e)
    }
  }
});
