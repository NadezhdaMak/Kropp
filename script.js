function addUnitOnInput(inputId, unit) {
  const input = document.getElementById(inputId);
  
  // Только цифры
  function getCleanValue() {
    return input.value.replace(/[^0-9]/g, '');
  }
  
  // При вводе — только цифры, без единицы
  input.addEventListener('input', function() {
    this.value = getCleanValue();
  });
  
  // При потере фокуса — добавляем единицу
  input.addEventListener('blur', function() {
    const clean = getCleanValue();
    if (clean) {
      this.value = clean + ' ' + unit;
    }
  });
  
  // При фокусе — показываем только цифры
  input.addEventListener('focus', function() {
    this.value = getCleanValue();
  });
}

addUnitOnInput('weight', 'kg');
addUnitOnInput('height', 'cm');