class WelcomeController {
  constructor () {
    this.items = [
      { title: 'Babel', image: require('./img/babel-logo.png') },
      { title: 'Node Sass', image: require('./img/libsass-logo.png') },
      { title: 'Webpack', image: require('./img/what-is-webpack.png') },
    ];
  }
}
export default WelcomeController;
