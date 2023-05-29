function create(id, parent, width, height) {
    let divWrapper = document.createElement("div");
    let canvasElem = document.createElement("canvas");

    parent.appendChild(divWrapper);
    divWrapper.appendChild(canvasElem);

    divWrapper.id = id;
    canvasElem.width = width;
    canvasElem.height = height;

    let ctx = canvasElem.getContext("2d");

    return {
        ctx: ctx,
        id: id,
    };
}

function createReportList(wrapperId) {
    let list = document.createElement("ul");
    list.id = wrapperId + "-reporter";

    let canvasWrapper = document.getElementById(wrapperId);
    canvasWrapper.appendChild(list);

    return list.id;
}

export { create, createReportList };

/**
 * Canvas 렌더링 컨텍스트
 *
 * <canvas> 엘리먼트는 고정 크기의 드로잉 영역을 생성하고 하나 이상의 렌터링 컨텍스트(rendering contexts)를 노출하여 출력할 컨텐츠를 생성하고 다루게 됨
 * 캔버스는 처음에 비어있습니다. 무언가를 표시하기 위해서, 어떤 스크립트가 렌더링 컨텍스트에 접근하여 그리도록 할 필요가 있습니다.
 * getContext(): canvas요소는 getContext() 메서드를 이용해서, 렌더링 컨텍스트와 그리기 함수들을 사용할 수 있습니다.
 */
