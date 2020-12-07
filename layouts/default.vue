<template>
  <div class="container antialiased">
    <div class="flex w-full min-h-screen">
      <div class="navigation w-2/12 border-2 border-white">
        <img src="~/assets/images/coderdojo.svg" alt="Code Dojo Logo" class="w-40 mt-10 mb-10 ml-5"/>
        <div class="text-white ml-5">
          <ul>
            <li class="block" id="menuBooks">
              <nuxt-link to='books'>Books</nuxt-link>
            </li>
            <li class="block" id="menuSubscriptionWebsites">
              <nuxt-link to='subscription-websites'>Subscription Websites</nuxt-link>
            </li>
            <li class="block" id="menuRobots">
              <nuxt-link to='robots'>Robots</nuxt-link>
            </li>
            <li class="block" id="menuProgrammableElectronics">
              <nuxt-link to='programmable-electronics'>Electronics</nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-10/12 ">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<style>

body {
  background: linear-gradient(to bottom, #642580 0%, #8D5FA2 100%);
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}


</style>
