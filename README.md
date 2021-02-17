# Koji User Defaults

**Permissioned data bridge for Koji templates.**

## Overview

**[DEPRECATED]**
This package is deprecated and is included only for backwards compatibility. For new templates, use [@withkoji/core](https://developer.withkoji.com/reference/packages/withkoji-koji-core).

The @withkoji/user-defaults package provides a secure interface for accessing permissioned user data across all Koji templates. A template can request data with a reserved key, for the user’s Koji profile data, or with a user key from any template on Koji, for additional preferences. This data can then be used to autofill values and personalize experiences. For example, automatically enter the user’s name in a leaderboard, or display the user’s avatar in a game.

## Installation

Install the package in your Koji project.
```
npm install --save @withkoji/user-defaults
```

## Basic use

Instantiate `KojiUserDefaults`.
```
import KojiUserDefaults from '@withkoji/user-defaults';
const kojiUserDefaults = new KojiUserDefaults();
```

## Related resources

* [Package documentation](https://developer.withkoji.com/reference/packages/withkoji-user-defaults-package)
* [Koji homepage](http://withkoji.com/)

## Contributions and questions

See the [contributions page](https://developer.withkoji.com/docs/about/contribute-koji-developers) on the developer site for info on how to make contributions to Koji repositories and developer documentation.

For any questions, reach out to the developer community or the `@Koji Team` on our [Discord server](https://discord.com/invite/9egkTWf4ec).
