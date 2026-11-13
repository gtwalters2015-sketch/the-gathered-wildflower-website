const colorOptions = {
  white: { name: 'White', hex: '#f5f2ea' },
  black: { name: 'Black', hex: '#171717' },
  sand: { name: 'Sand', hex: '#d2b895' },
  darkHeather: { name: 'Dark Heather', hex: '#45464a' },
  athleticHeather: { name: 'Athletic Heather', hex: '#b7b6b1' },
  softPink: { name: 'Soft Pink', hex: '#e8b3bd' },
  forestGreen: { name: 'Forest Green', hex: '#254b38' },
  orange: { name: 'Orange', hex: '#df7133' },
  dustyBlue: { name: 'Dusty Blue (green-toned)', hex: '#6f9187' },
  heatherMauve: { name: 'Heather Mauve', hex: '#a57682' },
  autumnOrange: { name: 'Autumn Orange', hex: '#a94f2a' },
  asphalt: { name: 'Asphalt', hex: '#4d4e51' }
};

const palettes = {
  light: ['white', 'sand', 'athleticHeather', 'softPink', 'dustyBlue', 'heatherMauve'],
  bold: ['white', 'black', 'sand', 'darkHeather', 'athleticHeather', 'softPink', 'forestGreen', 'dustyBlue', 'heatherMauve', 'asphalt'],
  warm: ['white', 'sand', 'athleticHeather', 'softPink', 'forestGreen', 'orange', 'dustyBlue', 'heatherMauve', 'autumnOrange'],
  darkFriendly: ['white', 'sand', 'athleticHeather', 'softPink', 'forestGreen', 'orange', 'dustyBlue', 'heatherMauve', 'autumnOrange']
};

const productTypes = ['T-shirt', 'Hoodie', 'Long-sleeve T-shirt', 'Sweatshirt'];
const product = (id, name, image, category, palette = 'bold') => ({ id, name, image: `${image}.jpg`, category, colors: palettes[palette] });

const designs = [
  product('cowgirl-sassy-classy', 'Sassy, Classy and a Little Badassy', 'cowgirl-01', 'Cowgirl & Western', 'bold'),
  product('cowgirl-sweetheart-blush', "Some Days I’m a Sweetheart, Other Days I’ll Make You Blush", 'cowgirl-02', 'Cowgirl & Western', 'bold'),
  product('cowgirl-running-late', 'Probably Late for Something, But at Least I Look Cute', 'cowgirl-03', 'Cowgirl & Western', 'darkFriendly'),
  product('cowgirl-cows', 'Just a Girl Who Likes Cows and Says It a Lot', 'cowgirl-04', 'Cowgirl & Western', 'bold'),
  product('tea-protection', 'I Drink Loaded Tea for Your Protection', 'tea-protection', 'Loaded Tea', 'light'),
  product('tea-broke', "I Suspect She’s Broke but Always Buys Loaded Tea", 'tea-broke', 'Loaded Tea', 'light'),
  product('tea-jesus', 'Jesus & Loaded Tea', 'tea-faith-01', 'Faith & Loaded Tea', 'light'),
  product('tea-grace', 'Saved by Grace & Loaded Teas', 'tea-faith-02', 'Faith & Loaded Tea', 'light'),
  product('tea-rooted', 'Rooted in Christ with a Loaded Tea', 'tea-faith-03', 'Faith & Loaded Tea', 'light'),
  product('tea-obsessed', 'Loaded Tea Obsessed', 'tea-retro-01', 'Loaded Tea', 'light'),
  product('tea-summer-vibes', 'Loaded Tea Summer Vibes', 'tea-retro-02', 'Loaded Tea', 'light'),
  product('tea-sippin', 'Sippin’ Loaded Tea', 'tea-retro-03', 'Loaded Tea', 'light'),
  product('tea-bad-mood', 'Bad Mood? Load a Tea', 'tea-retro-04', 'Loaded Tea', 'light'),
  product('tea-messy-bun', 'Messy Bun & Loaded Tea', 'tea-retro-05', 'Loaded Tea', 'light'),
  product('tea-iced-caffeinated', 'Iced, Caffeinated, Hydrated & Fueled by Loaded Tea', 'tea-retro-06', 'Loaded Tea', 'light'),
  product('tea-lake-vibes', 'Lake Vibes', 'tea-seasonal-01', 'Seasonal Loaded Tea', 'light'),
  product('tea-lake-days', 'Loaded Teas & Lake Days', 'tea-seasonal-02', 'Seasonal Loaded Tea', 'light'),
  product('tea-boat-hair', 'Boat Hair, Loaded Tea, Don’t Care', 'tea-seasonal-03', 'Seasonal Loaded Tea', 'light'),
  product('tea-life-lake', 'Life Is Better at the Lake', 'tea-seasonal-04', 'Seasonal Loaded Tea', 'light'),
  product('tea-lake-trips', 'Tea Sips & Lake Trips', 'tea-seasonal-05', 'Seasonal Loaded Tea', 'light'),
  product('tea-gobble', 'Gobble, Sip, Repeat', 'tea-seasonal-06', 'Seasonal Loaded Tea', 'warm'),
  product('tea-thankful', 'Thankful for Loaded Teas', 'tea-seasonal-07', 'Seasonal Loaded Tea', 'warm'),
  product('tea-leftovers', 'Loaded Tea & Leftovers', 'tea-seasonal-08', 'Seasonal Loaded Tea', 'warm'),
  product('tea-deviled-eggs', 'I’m Just Here for the Deviled Eggs and Loaded Tea', 'tea-seasonal-09', 'Seasonal Loaded Tea', 'warm'),
  product('tea-pumpkin-pie', 'Sweeter Than Pumpkin Pie', 'tea-seasonal-10', 'Seasonal Loaded Tea', 'warm'),
  product('tea-fall-vibes', 'Fall Vibes and Loaded Tea', 'tea-seasonal-11', 'Seasonal Loaded Tea', 'warm'),
  product('tea-sleigh-sips', 'Sleigh Sips & Loaded Teas', 'tea-seasonal-12', 'Seasonal Loaded Tea', 'light'),
  product('tea-christmas-vibes', 'Christmas Vibes Fueled by Loaded Tea', 'tea-seasonal-13', 'Seasonal Loaded Tea', 'light'),
  product('tea-dear-santa', 'Dear Santa, Bring Me Loaded Teas', 'tea-seasonal-14', 'Seasonal Loaded Tea', 'light'),
  product('tea-christmas-girl', 'Just a Girl Who Loves Christmas & Loaded Teas', 'tea-seasonal-15', 'Seasonal Loaded Tea', 'light'),
  product('tea-frosty', 'Frosty Sips & Loaded Teas', 'tea-seasonal-16', 'Seasonal Loaded Tea', 'light'),
  product('tea-life-better', 'Loaded Tea Makes Life Better', 'tea-life-better', 'Loaded Tea', 'darkFriendly')
];

const holidayDesigns = [
  product('holiday-turkey', 'I Cook My Turkey the Old Fashioned Way—I Let My Mom Do It', 'holiday-cozy-01', 'Holiday', 'warm'),
  product('holiday-serial-killer', 'Serial Killer Documentaries or Christmas Movies', 'holiday-cozy-02', 'Holiday', 'light'),
  product('holiday-jingle-tired', 'Probably Just Gonna Jingle Some of the Way—I’m Tired', 'holiday-cozy-03', 'Holiday', 'bold'),
  product('holiday-deviled-eggs', 'I Only Came for the Deviled Eggs', 'holiday-cozy-04', 'Holiday', 'warm'),
  product('holiday-santa-mess', 'Santa Knows I’m a Mess', 'holiday-edgy-01', 'Edgy Holiday', 'bold'),
  product('holiday-tolerate-yall', 'Jingle Bells—I Tolerate Y’all', 'holiday-edgy-02', 'Edgy Holiday', 'light'),
  product('holiday-unstable', 'Chillin’ but Still a Little Unstable', 'holiday-edgy-03', 'Edgy Holiday', 'bold'),
  product('holiday-chaotic', 'Merry and a Little Chaotic', 'holiday-edgy-04', 'Edgy Holiday', 'light'),
  product('holiday-spooky-season', 'Spooky Season ’Til Christmas Season', 'holiday-edgy-05', 'Edgy Holiday', 'light'),
  product('holiday-coffee-anxiety', 'Fueled by Coffee, Christmas Anxiety & Good Vibes', 'holiday-edgy-06', 'Edgy Holiday', 'bold'),
  product('holiday-wonderful-time', 'It’s the Most Wonderful Damn Time of the Year', 'holiday-edgy-07', 'Edgy Holiday', 'light'),
  product('holiday-grinch-era', 'In My Grinch Era', 'holiday-edgy-08', 'Edgy Holiday', 'bold'),
  product('holiday-hot-mess', 'The Hot Mess Express', 'holiday-retro-01', 'Retro Holiday', 'light'),
  product('holiday-merry-weird', 'Stay Merry and a Little Weird', 'holiday-retro-02', 'Retro Holiday', 'bold'),
  product('holiday-cozy-vibes', '’Tis the Season for Cozy Vibes', 'holiday-retro-03', 'Retro Holiday', 'light'),
  product('holiday-era', 'In My Holiday Era', 'holiday-retro-04', 'Retro Holiday', 'bold'),
  product('holiday-feral', 'Feelin’ Festive & Slightly Feral', 'holiday-retro-05', 'Retro Holiday', 'warm'),
  product('holiday-dear-santa', 'Dear Santa—I Tried, It’s Fine, Whatever', 'holiday-retro-06', 'Retro Holiday', 'light'),
  product('holiday-spirit', 'Fueled by Holiday Spirit (and Caffeine)', 'holiday-retro-07', 'Retro Holiday', 'bold'),
  product('holiday-unhinged', 'Merry, Bright, and a Little Unhinged', 'holiday-retro-08', 'Retro Holiday', 'light')
];

const keychains = [
  { id: 'keychain-silly-goose', name: 'Silly Goose on the Loose', image: 'keychain-silly-goose.jpg' },
  { id: 'keychain-dilly-dally', name: 'I Dilly and I Dally', image: 'keychain-dilly-dally.jpg' },
  { id: 'keychain-late', name: 'Sorry I’m Late—I Was Dilly Dallying', image: 'keychain-late.jpg' },
  { id: 'keychain-queen', name: 'Dilly Dally Queen', image: 'keychain-queen.jpg' }
];

const seasonalHolidayIds = new Set([
  'tea-gobble', 'tea-thankful', 'tea-leftovers', 'tea-deviled-eggs', 'tea-pumpkin-pie', 'tea-fall-vibes',
  'tea-sleigh-sips', 'tea-christmas-vibes', 'tea-dear-santa', 'tea-christmas-girl', 'tea-frosty'
]);
const availableDesigns = designs.filter((item) => !seasonalHolidayIds.has(item.id));
const holidayCatalog = [...holidayDesigns, ...designs.filter((item) => seasonalHolidayIds.has(item.id))];
const allDesigns = [...designs, ...holidayDesigns];

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);

function designCard(item) {
  return `<article class="catalog-card">
    <div class="catalog-card-image"><img src="${item.image}" alt="${escapeHtml(item.name)} design" loading="lazy"></div>
    <div class="catalog-card-body"><p class="catalog-card-category">${escapeHtml(item.category)}</p><h2>${escapeHtml(item.name)}</h2><p class="catalog-card-meta">Choose garment style and available colors</p></div>
    <a class="catalog-card-link" href="design.html?id=${encodeURIComponent(item.id)}"><span class="sr-only">View ${escapeHtml(item.name)}</span></a>
  </article>`;
}

function keychainCard(item) {
  const params = new URLSearchParams({ design: item.name, product: 'Finished keychain', color: 'As shown' });
  return `<article class="catalog-card">
    <div class="catalog-card-image"><img src="${item.image}" alt="${escapeHtml(item.name)} keychain" loading="lazy"></div>
    <div class="catalog-card-body"><p class="catalog-card-category">Finished Keychain · Local Pickup Only</p><h2>${escapeHtml(item.name)} <small>(Can be bundled)</small></h2><p class="keychain-price"><strong>$4 each</strong><br>2 for $7 · 3 for $10</p><a class="keychain-order" href="custom-orders.html?${params}">Request This Keychain</a></div>
  </article>`;
}

function renderCatalog() {
  const page = document.querySelector('[data-catalog]');
  const grid = document.getElementById('design-grid');
  if (!page || !grid) return;
  const type = page.dataset.catalog;
  if (type === 'keychains') {
    grid.innerHTML = keychains.map(keychainCard).join('');
    return;
  }
  const source = type === 'holiday' ? holidayCatalog : availableDesigns;
  const search = document.getElementById('catalog-search');
  const empty = document.getElementById('catalog-empty');
  const paint = () => {
    const query = (search?.value || '').trim().toLocaleLowerCase();
    const filtered = source.filter((item) => `${item.name} ${item.category}`.toLocaleLowerCase().includes(query));
    grid.innerHTML = filtered.map(designCard).join('');
    if (empty) empty.hidden = filtered.length > 0;
  };
  paint();
  search?.addEventListener('input', paint);
}

function renderProduct() {
  const host = document.getElementById('product-detail');
  if (!host) return;
  const id = new URLSearchParams(location.search).get('id');
  const item = allDesigns.find((entry) => entry.id === id);
  if (!item) {
    host.innerHTML = '<div class="missing-design"><h1>Design not found</h1><p>Please return to the design gallery and choose another item.</p></div>';
    return;
  }
  const isHoliday = holidayCatalog.includes(item);
  const back = document.getElementById('back-link');
  back.href = isHoliday ? 'holiday.html' : 'available-designs.html';
  back.textContent = isHoliday ? '← Back to holiday designs' : '← Back to available designs';
  document.title = `${item.name} | The Gathered Wildflower`;
  const firstColor = item.colors[0];
  host.innerHTML = `<div class="product-gallery">
      <img class="original-design" src="${item.image}" alt="${escapeHtml(item.name)} original design mockup">
      <p class="preview-label">Interactive garment color preview</p>
      <div class="garment-preview" id="garment-preview" style="--garment-color:${colorOptions[firstColor].hex}"><img class="garment-art" src="${item.image}" alt="" aria-hidden="true"></div>
    </div>
    <div class="product-info">
      <p class="eyebrow">${escapeHtml(item.category)}</p><h1>${escapeHtml(item.name)}</h1>
      <p class="product-description">Choose the product and color you would like. Only colors that complement this artwork are shown.</p>
      <div class="product-field"><label for="product-type">Product</label><select id="product-type">${productTypes.map((type) => `<option>${type}</option>`).join('')}</select></div>
      <fieldset class="product-field color-fieldset"><legend>Color</legend><div class="color-swatches">${item.colors.map((key, index) => `<button class="color-swatch" type="button" data-color="${key}" style="background:${colorOptions[key].hex}" aria-label="${colorOptions[key].name}" aria-pressed="${index === 0}"></button>`).join('')}</div><p class="selected-color">Selected: <strong id="selected-color">${colorOptions[firstColor].name}</strong></p></fieldset>
      <p class="product-note">The visualizer is a color guide. Screen settings and garment availability can affect the exact shade. Final product details and pricing will be confirmed before materials are purchased.</p>
      <a class="order-design" id="order-design" href="#">Request This Design</a>
    </div>`;
  const preview = document.getElementById('garment-preview');
  const selectedLabel = document.getElementById('selected-color');
  const productSelect = document.getElementById('product-type');
  const orderLink = document.getElementById('order-design');
  let selectedKey = firstColor;
  const updateOrderLink = () => {
    const params = new URLSearchParams({ design: item.name, product: productSelect.value, color: colorOptions[selectedKey].name });
    orderLink.href = `custom-orders.html?${params}`;
  };
  host.querySelectorAll('.color-swatch').forEach((button) => button.addEventListener('click', () => {
    selectedKey = button.dataset.color;
    host.querySelectorAll('.color-swatch').forEach((swatch) => swatch.setAttribute('aria-pressed', String(swatch === button)));
    preview.style.setProperty('--garment-color', colorOptions[selectedKey].hex);
    selectedLabel.textContent = colorOptions[selectedKey].name;
    updateOrderLink();
  }));
  productSelect.addEventListener('change', updateOrderLink);
  updateOrderLink();
}

function prepareCustomOrder() {
  const details = document.getElementById('request-details');
  if (!details) return;
  const params = new URLSearchParams(location.search);
  const design = params.get('design');
  if (!design) return;
  const productChoice = params.get('product') || 'Not selected';
  const color = params.get('color') || 'Not selected';
  details.value = `I’m interested in this available design:\n\nDesign: ${design}\nProduct: ${productChoice}\nColor: ${color}\n\nSize, quantity, deadline, and additional details:\n`;
}

const orderImages = document.getElementById('order-images');
const selectedFiles = document.getElementById('selected-files');
const orderForm = document.getElementById('custom-order-form');
const maxUploadBytes = 10 * 1024 * 1024;
const updateSelectedFiles = () => {
  if (!orderImages || !selectedFiles) return true;
  const files = Array.from(orderImages.files || []);
  const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
  const totalMb = (totalBytes / 1024 / 1024).toFixed(1);
  if (!files.length) { selectedFiles.textContent = 'No reference images selected.'; orderImages.setCustomValidity(''); return true; }
  if (totalBytes > maxUploadBytes) { selectedFiles.textContent = `${files.length} image${files.length === 1 ? '' : 's'} selected (${totalMb} MB total). Please keep the combined total under 10 MB.`; orderImages.setCustomValidity('Please choose images totaling no more than 10 MB.'); return false; }
  selectedFiles.textContent = `${files.length} image${files.length === 1 ? '' : 's'} ready to attach (${totalMb} MB total).`;
  orderImages.setCustomValidity('');
  return true;
};
orderImages?.addEventListener('change', updateSelectedFiles);
orderForm?.addEventListener('submit', (event) => { if (!updateSelectedFiles()) { event.preventDefault(); orderImages.reportValidity(); } });

renderCatalog();
renderProduct();
prepareCustomOrder();
