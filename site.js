    const shopSearch = document.getElementById('shop-search');
    const shopMenu = document.getElementById('shop-menu');
    const shopGroups = document.querySelectorAll('.shop-group');
    const noResults = document.getElementById('no-results');

    if (shopSearch && shopMenu && shopGroups.length && noResults) shopSearch.addEventListener('input', () => {
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

    const orderImages = document.getElementById('order-images');
    const selectedFiles = document.getElementById('selected-files');
    const orderForm = document.getElementById('custom-order-form');
    const maxUploadBytes = 10 * 1024 * 1024;

    const updateSelectedFiles = () => {
      if (!orderImages || !selectedFiles) return true;
      const files = Array.from(orderImages.files || []);
      const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
      const totalMb = (totalBytes / 1024 / 1024).toFixed(1);

      if (!files.length) {
        selectedFiles.textContent = 'No reference images selected.';
        orderImages.setCustomValidity('');
        return true;
      }

      if (totalBytes > maxUploadBytes) {
        selectedFiles.textContent = `${files.length} image${files.length === 1 ? '' : 's'} selected (${totalMb} MB total). Please keep the combined total under 10 MB.`;
        orderImages.setCustomValidity('Please choose images totaling no more than 10 MB.');
        return false;
      }

      selectedFiles.textContent = `${files.length} image${files.length === 1 ? '' : 's'} ready to attach (${totalMb} MB total).`;
      orderImages.setCustomValidity('');
      return true;
    };

    if (orderImages) orderImages.addEventListener('change', updateSelectedFiles);
    if (orderForm) orderForm.addEventListener('submit', (event) => {
      if (!updateSelectedFiles()) {
        event.preventDefault();
        orderImages.reportValidity();
      }
    });
