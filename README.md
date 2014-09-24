Pretty Print Pivotal - Chrome Extension
=======================================

Chrome extension to print some good looking Pivotal tickets

### Installation

- Download the CRX extension file to your machine
- Open chrome://extensions
- Drag the downloaded CRX file to the Chrome extensions page

### Usage

The script will successfully run on a the Pivotal ticket page, i.e. https://www.pivotaltracker.com/n/projects/123456/stories/12345678.

To generate the printable ticket, got to a Pivotal ticket page, right click and hit the "Pretty Print Pivotal" option. A new page with the tickets details will load which you can then print.

### Development

Feel free to fork this repository to make changes to the templates.

### Compiling

You need to have `Ruby` installed.

__Install crxmake__
```
gem source -a http://gemcutter.org
sudo gem install crxmake
```

__Compile__
Inside the extension folder
```
crxmake --pack-extension=./ --extension-output=pivotal-print-chrome-extension.crx
```
