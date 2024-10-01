'use client';
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
import {
    Bold, Italic, Strikethrough, Code, XCircle, List,
    ListOrdered, Code2, Quote, Minus, CornerUpLeft, CornerUpRight
} from 'lucide-react'
import Tooltip from '@/components/ui/tooltip';

const MenuBar = () => {
    const { editor } = useCurrentEditor()

    if (!editor) {
        return null
    }

    return (
        <div className="flex flex-wrap card bg-base-200 rounded-b-none">
            <div className="btn-group items-center flex flex-wrap py-1">
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleBold()
                            .run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleBold()
                                .run()
                        }
                        className={`btn btn-xs ${editor.isActive('bold') ? 'btn-active' : ''}`}
                >
                    <Bold size={18}/>
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleItalic()
                            .run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleItalic()
                                .run()
                        }
                        className={`btn btn-xs ${editor.isActive('italic') ? 'btn-active' : ''}`}
                >
                    <Italic size={18}/>
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleStrike()
                            .run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleStrike()
                                .run()
                        }
                        className={`btn btn-xs ${editor.isActive('strike') ? 'btn-active' : ''}`}
                >
                    <Strikethrough size={18}/>
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleCode()
                            .run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleCode()
                                .run()
                        }
                        className={`btn btn-xs ${editor.isActive('code') ? 'btn-active' : ''}`}
                >
                    <Code size={18}/>
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .setParagraph()
                            .run()}
                        className={`btn btn-xs ${editor.isActive('paragraph') ? 'btn-active' : ''}`}
                >
                    P
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleHeading({level: 1})
                            .run()}
                        className={`btn btn-xs ${editor.isActive('heading', {level: 1}) ? 'btn-active' : ''}`}
                >
                    H1
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleHeading({level: 2})
                            .run()}
                        className={`btn btn-xs ${editor.isActive('heading', {level: 2}) ? 'btn-active' : ''}`}
                >
                    H2
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleHeading({level: 3})
                            .run()}
                        className={`btn btn-xs ${editor.isActive('heading', {level: 3}) ? 'btn-active' : ''}`}
                >
                    H3
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleHeading({level: 4})
                            .run()}
                        className={`btn btn-xs ${editor.isActive('heading', {level: 4}) ? 'btn-active' : ''}`}
                >
                    H4
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleHeading({level: 5})
                            .run()}
                        className={`btn btn-xs ${editor.isActive('heading', {level: 5}) ? 'btn-active' : ''}`}
                >
                    H5
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleHeading({level: 6})
                            .run()}
                        className={`btn btn-xs ${editor.isActive('heading', {level: 6}) ? 'btn-active' : ''}`}
                >
                    H6
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleBulletList()
                            .run()}
                        className={`btn btn-xs ${editor.isActive('bulletList') ? 'btn-active' : ''}`}
                >
                    <List size={18}/>
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleOrderedList()
                            .run()}
                        className={`btn btn-xs ${editor.isActive('orderedList') ? 'btn-active' : ''}`}
                >
                    <ListOrdered size={18}/>
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleCodeBlock()
                            .run()}
                        className={`btn btn-xs ${editor.isActive('codeBlock') ? 'btn-active' : ''}`}
                >
                    <Code2 size={18}/>
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .toggleBlockquote()
                            .run()}
                        className={`btn btn-xs ${editor.isActive('blockquote') ? 'btn-active' : ''}`}
                >
                    <Quote size={18}/>
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .setHorizontalRule()
                            .run()}
                        className="btn btn-xs"
                >
                    <Minus size={18}/>
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .undo()
                            .run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .undo()
                                .run()
                        }
                        className="btn btn-xs"
                >
                    <CornerUpLeft size={18}/>
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .redo()
                            .run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .redo()
                                .run()
                        }
                        className="btn btn-xs"
                >
                    <CornerUpRight size={18}/>
                </button>
                <button type="button"
                        onClick={() => editor.chain()
                            .focus()
                            .clearNodes()
                            .run()}
                        className="btn btn-xs"
                >
                    <XCircle size={18}/>
                </button>

            </div>
        </div>
    )
}


const extensions = [
    // @ts-ignore
    TextStyle.configure({types: [ListItem.name]}),
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false,
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false,
        },
    }),
]

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`

interface FormRichEditorProps {
    id: string;
    label: string;
    value?: string;
    errorMessage?: string;
    required?: boolean;
    tooltip?: string;
}

const FormRichEditor: React.FC<FormRichEditorProps> = ({
    id,
    label,
    value = '',
    errorMessage,
    required,
    tooltip
}) => {
    const [content, setContent] = useState<string>(value);

    return (
        <div className="form-control mb-3">
            {/* Label and Tooltip */}
            <div className="flex items-center justify-between">
                <label className="label" htmlFor={id}>
                    <span className="label-text">{label}</span>
                </label>
                {tooltip && <Tooltip tip={tooltip} />}
            </div>

            {/* Hidden Input to Submit Content */}
            <input type="hidden" id={id} name={id} value={content} required={required} />

            {/* Rich Text Editor */}
            <div className={`prose lg:prose-xl border-2 border-base-200 card min-w-full ${errorMessage ? 'input-error' : ''}`}>
                <EditorProvider
                    onUpdate={(e) => setContent(e.editor.getHTML())}
                    slotBefore={<MenuBar />}
                    extensions={extensions}
                    content={content}
                    immediatelyRender={false}
                />
            </div>

            {/* Error Message */}
            {errorMessage && (
                <span className="text-error">{errorMessage}</span>
            )}
        </div>
    );
};

export default FormRichEditor;
