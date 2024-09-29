function renderComponent(data) {
    const container = document.getElementById('my-component');
    container.innerHTML = `<h1>${data.title}</h1><p>${data.content}</p>`;
}