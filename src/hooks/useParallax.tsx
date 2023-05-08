const DIVIDER_HEIGHT = 5;
export default function useParallax(outerDivRef: any) {
    const wheelHandler = (e: any) => {
        e.preventDefault();
        const { deltaY } = e;
        const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
        const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

        if (deltaY > 0) {
            // 스크롤 내릴 때
            if (scrollTop >= 0 && scrollTop < pageHeight) {
                //현재 1페이지
                console.log("현재 1페이지, down");
                outerDivRef.current.scrollTo({
                    top: pageHeight,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                //현재 2페이지
                console.log("현재 2페이지, down");
                outerDivRef.current.scrollTo({
                    top: pageHeight * 2,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
                //현재 2페이지
                console.log("현재 2페이지, down");
                outerDivRef.current.scrollTo({
                    top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
                // 현재 3페이지
                console.log("현재 4페이지, down");
                outerDivRef.current.scrollTo({
                    top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                    left: 0,
                    behavior: "smooth",
                });
            }
        } else {
            // 스크롤 올릴 때
            if (scrollTop >= 0 && scrollTop < pageHeight) {
                //현재 1페이지
                console.log("현재 1페이지, up");
                outerDivRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                //현재 2페이지
                console.log("현재 2페이지, up");
                outerDivRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
                //현재 2페이지
                console.log("현재 3페이지, up");
                outerDivRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
                // 현재 3페이지
                console.log("현재 4페이지, up");
                outerDivRef.current.scrollTo({
                    top: pageHeight + DIVIDER_HEIGHT,
                    left: 0,
                    behavior: "smooth",
                });
            }
        }
    };
    return wheelHandler;
}
