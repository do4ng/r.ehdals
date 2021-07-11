import React from 'react';
import { MarkedHTML } from '../../Library/markdown';

import './style.scss';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    /*return (
      <div className="md-left">
        <textarea
          rows="10"
          value={this.state.value}
          onChange={this.handleChange}
        ></textarea>
        <div>
          <span
            className="output"
            dangerouslySetInnerHTML={MarkedHTML(this.state.value)}
          ></span>
        </div>
        <div>
          <span
            dangerouslySetInnerHTML={MarkedHTML(
              `\`\`\`json\n{ "url": "", "title": "", "des": "", "content": "${this.state.value
                .replace(/\n/g, '\\n')
                .replace(/"/g, '\\"')}", "tags": [], "time": "" }\n\`\`\``
            )}
          ></span>
        </div>
      </div>
    );*/
    return <div>페이지 지원 중단됨.</div>;
  }
}
