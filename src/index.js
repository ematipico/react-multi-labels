const isDevelop = process.env.NODE_ENV;
// eslint-disable-next-line no-unused-vars
const { Provider, Consumer } = React.createContext();

export class LabelsProvider extends React.Component {
  constructor(props) {
    super(props);
    const { language, labels } = props;
    this.changeLanguage = this.changeLanguage.bind(this);
    this.changeLabels = this.changeLabels.bind(this);
    this.state = {
      language: language,
      labels: labels,
      changeLanguage: this.changeLanguage,
      changeLabels: this.changeLabels
    };
    if (isDevelop) {
      if (!labels[language]) {
        console.warn('Careful! There is no object for the language that you just set!');
      }
    }
  }

  changeLanguage(language) {
    this.setState({
      language
    });
  }

  changeLabels(labels) {
    this.setState({
      labels
    });
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

LabelsProvider.propTypes = {
  labels: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  children: PropTypes.object
};

export const Label = ({ text }) => {
  return (
    <Consumer>
      {({ language, labels }) => {
        return labels[language][text];
      }}
    </Consumer>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired
};

export const GetLabel = ({ text, children }) => {
  return (
    <Consumer>
      {({ language, labels }) => {
        return children(labels[language][text]);
      }}
    </Consumer>
  );
};

GetLabel.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.func
};

export const GetLabels = ({ list, children }) => {
  return (
    <Consumer>
      {({ language, labels }) => {
        const finalLabels = list.reduce((obj, l) => {
          obj[l] = labels[language][l];
          return obj;
        }, {});
        return children({ ...finalLabels });
      }}
    </Consumer>
  );
};

GetLabels.propTypes = {
  list: PropTypes.array.isRequired,
  children: PropTypes.func
};

export const ChangeLanguage = ({ children }) => {
  return (
    <Consumer>
      {({ changeLanguage }) => {
        return children({ changeLanguage });
      }}
    </Consumer>
  );
};

ChangeLanguage.propTypes = {
  children: PropTypes.func
};

export const ChangeLabels = ({ children }) => {
  return (
    <Consumer>
      {({ changeLabels }) => {
        return children({ changeLabels });
      }}
    </Consumer>
  );
};

ChangeLabels.propTypes = {
  children: PropTypes.func
};
