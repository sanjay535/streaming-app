# Streaming Application

 [Live Project link](https://streaming-app-93d64.web.app/)
 
## Libraries
 - (React, ReactDOM,JSX) & Tailwind, firebase(authentication), Redux, react-router-dom ,youtube-player, TMDB API


## / (Home Route)
 - Header
 - Login/Signup
## /Browse route
 - MainVideoContainer
   - VideoTitle
   - BackgroundVideo
    - VolumeControl

 - VideoListsContainer  
   - PopularVideoList
     - n * VideoCard
   - TrendingVideoList
     - n * VideoCard
 - Footer     

 ## Deploy instruction
  - `$ npm run build` for building bundle for deploy
  - `$ firebase login`
  - `$ firebase init` intialize firebase onetime only
  - `$ firebase deploy --only hosting:app-name` 
  ```
  "hosting": {
    "site": "app-name",
    "public": "public",
  }
```
