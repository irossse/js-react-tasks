import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component {
  editorRef = React.createRef()


  componentDidMount() {
    this.editor = new Editor({
      el: this.editorRef.current,
      hideModeSwitch: true })
    this.editor.addHook('change', () => {
      this.props.onContentChange(this.editor.getMarkdown())
    })
  }

  componentWillUnmount() {
    this.editor.destroy()
  }


  render() {
    return <div ref={this.editorRef} />
  }
}
// END
