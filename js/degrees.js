
const api = "/models/degrees.json";

async function doAsync() {
    try {
        const res = await fetch(api);
        const data = await res.json();
        const div = document.getElementById('degree-list');
        div.innerHTML = buildProjectsList(data);

    } catch (err) { console.log(err) }
}



function buildProjectsList(degrees) {

    const degreeList = degrees.map(degree => {
        return `<div class="item">
            <dt>
                <strong>${degree.school}</strong>
            </dt>
            <dd>
                ${degree.major}
            </dd>
            <dd>
                ${degree.type}
            </dd>
        </div>
        `
    })

    return `
    <dl class="projects">
    ${degreeList.join('')}
    </dl>
`;
}