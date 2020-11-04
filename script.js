const btn = document.querySelectorAll('button');
const zegar = document.querySelector('#clock');


btn.forEach(pole => {
    pole.addEventListener('click', (e) => {
        let czas = e.target.value;
        zegar.innerHTML = czas;

        let zmiana = () => {
            czas = czas - 1;
            zegar.innerHTML = czas;
            if (czas == 0) {
                window.location.reload()

            }
        }
        setInterval(function () {
            zmiana()
        }, 1000);
    })
})