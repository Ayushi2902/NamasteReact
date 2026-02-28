# NAMASTE REACT

package.json keeps track of any version,it is confirgurations for our modules
 if ~ is used then major package is also installed.
 if ^ is used then minor package is installed.
package.lock,json keeps the exact versions of packages

node modules - these are folders, which contains all the code we fetched from npm, it contaisn the actual data of our modules.collection of depedencies

parcel uses all the other libraries that is why node modules installed all the other folders also even if we only installed parcel

if we have package.json we can recreate node modules using npm install, that is why we dont need to put node modules in out git

just like we have npm, we have npx it means executing the package.

CDN LINKS IS NOT PREFERRED WAY TO BRING REACT TO OUT CODE


always remove "main app.js" from package json.

#parcel
- dev build
- local server
- HMR hot module replacement
- file watching algotithm - written in C++
- Caching - faster builds
- IMAGE OPTIMIZATION (most expensive thing in our web browser is to load image to our page, pacel does this for us)
- Minification-parcel will be using some libraries
- Bundling
- Compressing the file
- consistent hashing 
- code splitting 
- differential bundling - support olders brownser
- ERROR HANDLING
- HTTPs
- Tree shaking - it will remove unused code for us.
- Different dev and production bundles-more optimization on production.

#Namaste food:


 *Header
 * - logo
 * - nav items
 *body
 *  - search bar
 *  - restaurant list
 *    - restaurant card
 *      - image
 *      - name
 *      - cusines
 *      - cost for two
 *      - delivery time
 *      - rating
 *footer
 *  - links
 *  - copyrights
 *  - address
 *  - contact info
 *
 //

There are two types of export and import - 

 - default export import 


 export default component;
 import component from "path";


 - amed export import 


 export const component;
 import {component} from "path";



 # React HOOKS

 {Normal js function written by meta developers}
 inside the react they have written this, we get it while importing react

 - useState() - 80% this - to generate super powerful react variables
 - useEffect() - 20% this



 # Routing in web apps
 - client side routing
 - server side routing