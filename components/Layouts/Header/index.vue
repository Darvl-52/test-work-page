<script setup lang="ts">
import './Header.scss';
</script>

<template>
  <header class="header">
    <div class="header__body container">
      <NuxtLink class="header__logo" to="/">
        <NuxtImg
            src="/Logo.jpg"
            width="698"
            height="372"
            alt="Логотип stik"
            class="header__logo-img"
        />
      </NuxtLink>
      <div class="header__wrapper">
        <nav class="header__actions">
          <ul class="header__actions-list">
            <li class="header__actions-item">
              <Button
                  href="/"
                  label="Поиск"
                  is-label-hidden
                  :icon=" {name: 'Search', alt: 'Иконка поиска', width: 20, height: 20} "
              />
            </li>
            <li class="header__actions-item">
              <Button
                  href="/"
                  class-name="hidden-tablet"
                  label="Избранное"
                  is-label-hidden
                  :icon=" {name: 'Bookmark', alt: 'Иконка закладки', width: 20, height: 20} "
              />
            </li>
            <li class="header__actions-item">
              <Button
                  href="/"
                  label="Профиль"
                  is-label-hidden
                  :icon=" {name: 'User', alt: 'Иконка профиля', width: 20, height: 20} "
              />
            </li>
          </ul>
        </nav>
        <div class="header__cart">
          <Button
              href="/"
              label="Корзина"
              is-label-hidden
              :icon=" {name: 'Basket', alt: 'Иконка корзины', width: 20, height: 20} "
          />
        </div>
      </div>
    </div>
  </header>
</template>