# interact.io ng-multi-select-lib

## Peer dependencies
* `@angular/common`: ^9.x.x
* `@angular/core`: ^9.x.x
* `lodash.xor`: ^4.5.0

## Steps to import the ng-multi-select-lib
* Add the submodule to your project: `yarn add @interact.io/ng-multi-select-lib`
* Import `NgMultiSelectLibModule` to your `app.module.ts`
* You are now all set! You can get started following the next section

## The nitty-gritty
Use the `<interact-multi-select>` tag in your html template as a wrapper.
You can assign the different properties to this tag:
```
multiSelectLabel: string
disabled: boolean
```

Then use the `<interact-multi-select-option>` tag to customize how the options are showing.
It requires the following input:
```
value: any (value added to your formControl for the corresponding option)
```

Here is a complete example, assuming that disabled and multiSelectLabel are defined in your component:
```
<interact-multi-select formControlName="objects" [disabled]="disabled"
                             [multiSelectLabel]="multiSelectLabel">
        <interact-multi-select-option *ngFor="let object of objectsList"
                                      [value]="object">{{object.title}}</interact-multi-select-option>
      </interact-multi-select>
```

## Author: 
* paul.vanuytvinck@interact.io
