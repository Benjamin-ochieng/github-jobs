<template>
  <div id="filter" class="hidden lg:block py-10">
    <div id="filter-menu" class="py-5 text-navy">
      <base-check label="Full time" />
      <fieldset class="mt-6">
        <legend class="text-sm mb-4 font-bold text-gray-600">Location</legend>
        <base-search
          searchInput="location"
          searchPlaceholder="City,State,Zip code or Country"
        ></base-search>
        <div class="pt-10 pb-2">
          <base-radio name="location" label="Amsterdam" value="amsterdam" class="ml-1 mb-3" />
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
