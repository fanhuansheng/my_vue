<template>
  <div>
    <div>
      <!--富文本编辑器组件-->
      <!-- bidirectional data binding（双向数据绑定） -->
      <quill-editor v-model="formData.content" ref="QuillEditor" class="editor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
      </quill-editor>
      <div class="ql-container ql-snow">
     <div class="ql-editor" v-html="formData.content" />
</div>
    </div>
  </div>
</template>
<script>
  import Quill from 'vue-quill-editor'
  let fonts = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman'];

  Quill.Quill.imports['formats/font'].whitelist=fonts;
  Quill.Quill.register(Quill.Quill.imports['formats/font']);
// console.log(Quill.Quill.imports['formats/font']);
// import { quillEditor } from 'vue-quill-editor'
// import Delta from 'quill-delta'
// import 'quill/dist/quill.core.css';
// import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';

//引入Qill插件
// import Quill from "quill";

const toolbarOptions = [
  ['insertMetric'],
  ['bold', 'italic', 'underline', 'strike'],        // 加粗，斜体，下划线，删除线
  ['blockquote', 'code-block'],                     //引用，代码块
  [{ 'header': 1 }, { 'header': 2 }],               // 几级标题
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],    // 有序列表，无序列表
  [{ 'script': 'sub' }, { 'script': 'super' }],     // 下角标，上角标
  [{ 'indent': '-1' }, { 'indent': '+1' }],         // 缩进
  [{ 'direction': 'rtl' }],                         // 文字输入方向
  [{ 'size': ['small', false, 'large', 'huge'] }],  // 字体大小
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],        // 标题
  [{ 'color': [] }, { 'background': [] }],          // 颜色选择
  [{ 'font': fonts}], // 字体
  [{ 'align': [] }],    // 居中
  ['clean'],            // 清除样式,
  ['link', 'image']   // 上传图片、上传视频
]

// toolbar标题
const titleConfig = [
  { Choice: '.ql-insertMetric', title: '跳转配置' },
  { Choice: '.ql-bold', title: '加粗' },
  { Choice: '.ql-italic', title: '斜体' },
  { Choice: '.ql-underline', title: '下划线' },
  { Choice: '.ql-header', title: '段落格式' },
  { Choice: '.ql-strike', title: '删除线' },
  { Choice: '.ql-blockquote', title: '块引用' },
  { Choice: '.ql-code', title: '插入代码' },
  { Choice: '.ql-code-block', title: '插入代码段' },
  { Choice: '.ql-font', title: '字体' },
  { Choice: '.ql-size', title: '字体大小' },
  { Choice: '.ql-list[value="ordered"]', title: '编号列表' },
  { Choice: '.ql-list[value="bullet"]', title: '项目列表' },
  { Choice: '.ql-direction', title: '文本方向' },
  { Choice: '.ql-header[value="1"]', title: 'h1' },
  { Choice: '.ql-header[value="2"]', title: 'h2' },
  { Choice: '.ql-align', title: '对齐方式' },
  { Choice: '.ql-color', title: '字体颜色' },
  { Choice: '.ql-background', title: '背景颜色' },
  { Choice: '.ql-image', title: '图像' },
  { Choice: '.ql-video', title: '视频' },
  { Choice: '.ql-link', title: '添加链接' },
  { Choice: '.ql-formula', title: '插入公式' },
  { Choice: '.ql-clean', title: '清除字体格式' },
  { Choice: '.ql-script[value="sub"]', title: '下标' },
  { Choice: '.ql-script[value="super"]', title: '上标' },
  { Choice: '.ql-indent[value="-1"]', title: '向左缩进' },
  { Choice: '.ql-indent[value="+1"]', title: '向右缩进' },
  { Choice: '.ql-header .ql-picker-label', title: '标题大小' },
  { Choice: '.ql-header .ql-picker-item[data-value="1"]', title: '标题一' },
  { Choice: '.ql-header .ql-picker-item[data-value="2"]', title: '标题二' },
  { Choice: '.ql-header .ql-picker-item[data-value="3"]', title: '标题三' },
  { Choice: '.ql-header .ql-picker-item[data-value="4"]', title: '标题四' },
  { Choice: '.ql-header .ql-picker-item[data-value="5"]', title: '标题五' },
  { Choice: '.ql-header .ql-picker-item[data-value="6"]', title: '标题六' },
  { Choice: '.ql-header .ql-picker-item:last-child', title: '标准' },
  { Choice: '.ql-size .ql-picker-item[data-value="small"]', title: '小号' },
  { Choice: '.ql-size .ql-picker-item[data-value="large"]', title: '大号' },
  { Choice: '.ql-size .ql-picker-item[data-value="huge"]', title: '超大号' },
  { Choice: '.ql-size .ql-picker-item:nth-child(2)', title: '标准' },
  { Choice: '.ql-align .ql-picker-item:first-child', title: '居左对齐' },
  { Choice: '.ql-align .ql-picker-item[data-value="center"]', title: '居中对齐' },
  { Choice: '.ql-align .ql-picker-item[data-value="right"]', title: '居右对齐' },
  { Choice: '.ql-align .ql-picker-item[data-value="justify"]', title: '两端对齐' }
]
export default {
  name: 'addarticle',
//   components: {
//     quillEditor
//   },
  data () {
    return {
      formData: {
        content: '' // `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1>`
      },
      editorOption: {
        placeholder: '请在这里输入',
        theme: 'snow', //主题 snow/bubble
        modules: {
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          toolbar: {
            container: toolbarOptions,
            handlers: {
              insertMetric: this.showHandle
            }
          }
        }
      }
    }
  },
  props: {
  },
  watch: {
  },
  created () {
  },
  mounted () {
    this.initButton()
    this.initTitle()
  },
  methods: {
    initTitle () {
      document.getElementsByClassName('ql-editor')[0].dataset.placeholder = ''
      for (let item of titleConfig) {
        let tip = document.querySelector('.quill-editor ' + item.Choice)
        if (!tip) continue
        tip.setAttribute('title', item.title)
      }
    },
    showHandle () {
      this.$message.error('这是自定义工具栏的方法！')
    },
    // 自定义按钮内容初始化
    initButton () {
        console.log( document.querySelector('.ql-insertMetric'));
      const editorButton = document.querySelector('.ql-insertMetric')
      editorButton.innerHTML = '<i class="el-icon-link" style="font-size: 18px;color:black"></i>'
    },
    // 失去焦点
    onEditorBlur (editor) { },
    // 获得焦点
    onEditorFocus (editor) { },
    // 开始
    onEditorReady (editor) { },
    // 值发生变化
    onEditorChange (editor) {
      // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
      // this.content = editor.html;
      console.log(editor);
    }
  }
}
</script>

<style lang='less'>
</style>