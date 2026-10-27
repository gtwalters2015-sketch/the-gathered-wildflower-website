    const shopSearch = document.getElementById('shop-search');
    const shopMenu = document.getElementById('shop-menu');
    const shopGroups = document.querySelectorAll('.shop-group');
    const noResults = document.getElementById('no-results');

    shopSearch.addEventListener('input', () => {
      const query = shopSearch.value.trim().toLocaleLowerCase();
      let matches = 0;

      shopGroups.forEach((group) => {
        const groupMatches = group.querySelector('h2').textContent.toLocaleLowerCase().includes(query);
        let visibleItems = 0;

        group.querySelectorAll('.shop-option').forEach((item) => {
          const visible = !query || groupMatches || item.textContent.toLocaleLowerCase().includes(query);
          item.hidden = !visible;
          if (visible) visibleItems += 1;
        });

        group.hidden = visibleItems === 0;
        matches += visibleItems;
      });

      noResults.hidden = matches > 0;
      if (query) shopMenu.open = true;
    });
