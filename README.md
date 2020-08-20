# Koji User Defaults SDK
**Permissioned data bridge for Koji posts**

## Getting started

Install the package:
```
npm install --save @withkoji/user-defaults
```

Import the package into your app.
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

## Reserved keys

- `profile.username`
- `profile.profilePicture`
- `profile.reputation`

Any other key represents a string value in an unscoped, portable, global storage. For example, you could define a key called `user.favoriteColor` and reuse that value across any app.
