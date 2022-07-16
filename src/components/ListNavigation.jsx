export function ListNavigation(props) {
    let pages = [];
    let currentPage = Math.floor(props.offSet/20);
    let lastPage = Math.ceil(props.listLength/20);
    let firstButtonPage = currentPage-3 > 0 ? currentPage-3 : 0;

    for (var i = firstButtonPage+1; i <= firstButtonPage+7 && i <= lastPage; i++) {
        let page = {
            pageNr: i,
            offset: 20 * (i-1)
        }
        pages.push(page);
    }
    console.log("first Button Page", firstButtonPage)
    console.log("current page", currentPage)
    console.log("last page", lastPage);
    console.log("offset", props.offSet)
    console.log(pages);

    return (
        <div id="list-navigation-component" className="list-navigation-container">
            {
                props.offSet != 0 &&
                <button onClick={props.onPrevPageChange}>
                    <i className="bi bi-chevron-left"></i>
                </button>
            }
            {
                pages.map((value, index) => (
                    <button key={index} disabled={currentPage+1 === value.pageNr} value={value.offset} onClick={props.goTo}>{value.pageNr}</button>
                ))
            }
            {
                props.offSet%20 == 0 && currentPage+1 != lastPage &&
                <button onClick={props.onNextPageChange}>
                    <i className="bi bi-chevron-right"></i>
                </button>
            }
        </div>
    )
}