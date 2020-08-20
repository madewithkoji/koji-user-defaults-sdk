# Koji User Defaults SDK
**Permissioned data bridge for Koji posts**

## Getting started

Install the package:
```
npm install --save @withkoji/user-defaults
```

Import the package into your app's root.
```
import KojiUserDefaults from '@withkoji/user-defaults';
```

Listen for "connected" event before making requests.
```
const kojiUserDefaults = new KojiUserDefaults();
kojiUserDefaults.onConnect((isConnected) => {
  if (isConnected) {
    kojiUserDefaults.get('profile.username', (success, key, value) => {
      console.log(success, key, value);
    });
  }
});
```
