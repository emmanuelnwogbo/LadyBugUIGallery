//I need to refactor to dynamic imports later
import {
  gridView,
  slideView,
  singleView
} from '../views';

export default class LadyBugGallery {
  constructor() {
    this.container = 'none';
    this.view = 'none';
  }

  initialize(options) {
    const {
      container,
      view
    } = options;

    if (!container || !view || container === '' || view === '') {
      return console.log(`missing container or view option`);
    }

    this.container = document.getElementById(container);

    if (this.container === null) {
      return console.log(`seems like you haven't chosen a valid element to display the gallery in`)
    }

    this.view = view;
    this.render();
  }

  render() {
    //refactor to use dynamic imports later on to import the views depeding on the switch options
    switch (this.view) {
      case 'grid':
        this.container.insertAdjacentHTML('beforeend', gridView());
        break;
      case 'single':
        this.container.insertAdjacentHTML('beforeend', singleView());
        break;
      case 'slider':
        this.container.insertAdjacentHTML('beforeend', slideView());
        break;
      default:
        return console.log('no view chosen, please choose a valid view of grid, slider, or single. Check the docs for more')
    }
  }
}