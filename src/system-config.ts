// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material':         'vendor/@angular2-material',
  'moment':                     'vendor/moment/moment.js',
  'underscore':                 'vendor/underscore/underscore.js',
  'three':                      'vendor/three/three.js',
  'lodash':                     'vendor/lodash',
  'ng2-bootstrap':              'vendor/ng2-bootstrap'
  // "ng2-dropdown":               "vendor/ng2-dropdown",
  // 'angular2-busy':              "vendor/angular2-busy/build/src",
  // 'angular2-google-maps':       "vendor/angular2-google-maps",
  // 'angular2TextMask':           "vendor/angular2-text-mask/dist/angular2TextMask.js"
};

/** User packages configuration. */
const packages: any = {
  'moment': {
    format: 'cjs'
  },
  'underscore':{
    format: 'cjs'
    // defaultExtension: 'js',
    // main: 'underscore.js'
  },
  'ng2-bootstrap': {
    defaultExtension: 'js'
  },
  'three': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'three.js'
  },
  'lodash': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'index.js'
  }
  // "ng2-dropdown":               { main: "index.js", defaultExtension: "js" },
  // 'angular2-busy':              { main: "index.js", defaultExtension: "js" },
  // 'angular2-google-maps/core':       { main: "index.js", defaultExtension: "js" }
};

const materialPkgs:string[] = [
  'core',
  'toolbar',
  'icon',
  'button',
  'sidenav',
  'list',
  'card',
  'input',
  'checkbox',
  'grid-list',
  'memu',
  'radio',
  'progress-bar',
  'progress-circle',
  'slide-toggle',
  'tabs'
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/threejs-periodic/threejs-periodic',
  'app/three-periodic',
  'app/template',
  'app/todo',
  'app/todo1',
  'app/todo2',
  'app/comps/sliderpanel',
  'app/comps/backtotop',
  'app/comps/ba-card',
  'app/comps/popularapp',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
