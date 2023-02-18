import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="160"
      height="16"
      viewBox="0 0 220 22"
      fill="#FFF"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M210.893 10.676C210.893 11.0109 210.868 11.4876 210.816 12.1057H194.626C194.909 13.6257 195.65 14.8299 196.847 15.7186C198.045 16.6074 199.533 17.0518 201.31 17.0518C203.577 17.0518 205.445 16.3046 206.913 14.8105L209.502 17.786C208.575 18.8937 207.403 19.7309 205.986 20.2975C204.569 20.8643 202.972 21.1476 201.194 21.1476C198.928 21.1476 196.931 20.6968 195.205 19.7953C193.479 18.8936 192.146 17.6377 191.206 16.0277C190.266 14.4178 189.796 12.5952 189.796 10.5601C189.796 8.55078 190.253 6.74116 191.167 5.13112C192.082 3.52109 193.35 2.26517 194.973 1.36352C196.596 0.462005 198.425 0.0111694 200.46 0.0111694C202.47 0.0111694 204.266 0.455554 205.851 1.34429C207.435 2.23303 208.672 3.48248 209.56 5.09238C210.449 6.70241 210.893 8.56368 210.893 10.676ZM200.46 3.8752C198.915 3.8752 197.607 4.33248 196.538 5.24705C195.469 6.16147 194.819 7.37865 194.587 8.89857H206.295C206.089 7.40447 205.458 6.19375 204.402 5.26627C203.346 4.33894 202.032 3.8752 200.46 3.8752Z"></path>
      <path d="M166.014 10.6714C166.014 11.0062 165.988 11.4828 165.936 12.1009H149.746C150.029 13.6209 150.77 14.8251 151.968 15.7139C153.166 16.6026 154.653 17.0471 156.431 17.0471C158.698 17.0471 160.565 16.3 162.034 14.8059L164.623 17.7812C163.695 18.8889 162.523 19.7261 161.106 20.2929C159.689 20.8596 158.092 21.1429 156.315 21.1429C154.048 21.1429 152.051 20.6922 150.326 19.7905C148.599 18.8889 147.267 17.6331 146.326 16.0231C145.386 14.413 144.916 12.5905 144.916 10.5555C144.916 8.54611 145.373 6.73636 146.288 5.12633C147.202 3.51629 148.471 2.26053 150.094 1.35888C151.717 0.457366 153.546 0.00653076 155.581 0.00653076C157.59 0.00653076 159.387 0.450915 160.971 1.33965C162.555 2.22826 163.792 3.47771 164.681 5.08774C165.569 6.69777 166.014 8.55891 166.014 10.6714ZM155.581 3.87056C154.035 3.87056 152.728 4.32785 151.659 5.24228C150.59 6.15684 149.939 7.37401 149.707 8.89393H161.415C161.209 7.39983 160.578 6.18897 159.522 5.26164C158.466 4.33416 157.152 3.87056 155.581 3.87056Z"></path>
      <path d="M118.855 10.6717C118.855 11.0066 118.829 11.4833 118.778 12.1014H102.588C102.871 13.6214 103.612 14.8256 104.809 15.7143C106.007 16.6031 107.495 17.0475 109.272 17.0475C111.539 17.0475 113.407 16.3003 114.875 14.8062L117.464 17.7817C116.537 18.8894 115.365 19.7266 113.948 20.2933C112.531 20.86 110.934 21.1433 109.156 21.1433C106.889 21.1433 104.893 20.6925 103.167 19.791C101.441 18.8894 100.108 17.6334 99.1679 16.0234C98.2276 14.4135 97.7574 12.5909 97.7574 10.5558C97.7574 8.54648 98.2147 6.73686 99.1291 5.12682C100.044 3.51679 101.312 2.26087 102.935 1.35935C104.558 0.457703 106.387 0.00689697 108.422 0.00689697C110.432 0.00689697 112.228 0.451255 113.813 1.33999C115.397 2.22873 116.633 3.47818 117.522 5.08808C118.411 6.69811 118.855 8.55938 118.855 10.6717ZM108.422 3.8709C106.877 3.8709 105.569 4.32819 104.5 5.24275C103.431 6.15731 102.781 7.37435 102.549 8.89427H114.257C114.051 7.40017 113.42 6.18945 112.364 5.26198C111.307 4.33464 109.994 3.8709 108.422 3.8709Z"></path>
      <path d="M88.2029 10.6733C88.2029 11.0082 88.1771 11.4847 88.1257 12.1029H71.9355C72.2188 13.6227 72.9594 14.827 74.1573 15.7157C75.3551 16.6045 76.8427 17.0488 78.6202 17.0488C80.8869 17.0488 82.7547 16.3019 84.2229 14.8078L86.8118 17.783C85.8845 18.8907 84.7124 19.728 83.2956 20.2946C81.8787 20.8614 80.2817 21.1447 78.5042 21.1447C76.2373 21.1447 74.2409 20.6939 72.5151 19.7923C70.7891 18.8907 69.456 17.6348 68.5159 16.0248C67.5756 14.4149 67.1054 12.5924 67.1054 10.5573C67.1054 8.54799 67.5627 6.73836 68.4771 5.12846C69.3917 3.51843 70.6603 2.26253 72.2832 1.36102C73.9062 0.459503 75.735 0.00866699 77.77 0.00866699C79.7794 0.00866699 81.5761 0.45292 83.1603 1.34166C84.7447 2.2304 85.981 3.47985 86.8698 5.08974C87.7585 6.69978 88.2029 8.56091 88.2029 10.6733ZM77.77 3.87257C76.2244 3.87257 74.9171 4.32985 73.8482 5.24441C72.7791 6.15884 72.1287 7.37602 71.8968 8.8958H83.6047C83.3986 7.40184 82.7676 6.19098 81.7114 5.26364C80.6552 4.3363 79.3415 3.87257 77.77 3.87257Z"></path>
      <path d="M189.384 0.00854492L180.209 21.2055H175.364L166.219 0.00854492H171.518L177.968 15.1493L184.509 0.00854492H189.384Z"></path>
      <path d="M128.411 0.00854492H133.317V17.2084H143.946V21.2055H128.411V0.00854492Z"></path>
      <path d="M60.856 21.2055L56.7681 15.3006H56.5259H52.2562V21.2055H47.3506V0.00854492H56.5259C58.4033 0.00854492 60.0335 0.321524 61.4162 0.947326C62.7991 1.57313 63.864 2.46131 64.611 3.61205C65.3578 4.76278 65.7313 6.1255 65.7313 7.70002C65.7313 9.27468 65.3529 10.6323 64.5958 11.7729C63.8387 12.9136 62.7638 13.7866 61.3709 14.3922L66.125 21.2055H60.856ZM60.7653 7.70002C60.7653 6.50894 60.3817 5.59546 59.6145 4.95957C58.8475 4.32368 57.727 4.00573 56.2532 4.00573H52.2562V11.3943H56.2532C57.727 11.3943 58.8475 11.0714 59.6145 10.4254C60.3817 9.77929 60.7653 8.87093 60.7653 7.70002Z"></path>
      <path d="M46.5563 0.00854492L37.381 21.2055H32.5361L23.3912 0.00854492H28.6904L35.1403 15.1493L41.6811 0.00854492H46.5563Z"></path>
      <path d="M17.3279 0.00854492H22.2336V21.2055H17.3279V0.00854492Z"></path>
      <path d="M0 0.00854492H4.90568V17.2084H15.5344V21.2055H0V0.00854492Z"></path>
      <path d="M215.596 0C216.422 0 217.17 0.19178 217.842 0.575357C218.513 0.95907 219.041 1.48669 219.424 2.15808C219.808 2.82948 220 3.57392 220 4.39137C220 5.20869 219.804 5.95727 219.412 6.63701C219.02 7.31674 218.486 7.85272 217.811 8.24477C217.135 8.63682 216.388 8.83276 215.571 8.83276C214.754 8.83276 214.009 8.63682 213.338 8.24477C212.666 7.85272 212.137 7.3189 211.749 6.64334C211.361 5.96777 211.167 5.22536 211.167 4.41638C211.167 3.60726 211.361 2.86499 211.749 2.18942C212.137 1.51372 212.669 0.979909 213.344 0.587993C214.02 0.195942 214.77 0 215.596 0ZM215.571 8.01949C216.238 8.01949 216.845 7.85903 217.391 7.53786C217.938 7.21682 218.367 6.77891 218.68 6.22425C218.993 5.6696 219.149 5.0586 219.149 4.39137C219.149 3.71581 218.997 3.10681 218.693 2.56467C218.388 2.02252 217.965 1.5951 217.423 1.2824C216.881 0.969565 216.272 0.813139 215.596 0.813139C214.921 0.813139 214.312 0.971568 213.77 1.28857C213.227 1.60557 212.802 2.03919 212.493 2.58967C212.185 3.14016 212.031 3.74902 212.031 4.41638C212.031 5.08361 212.185 5.69247 212.493 6.24296C212.802 6.79344 213.225 7.22719 213.763 7.54419C214.301 7.86106 214.904 8.01949 215.571 8.01949ZM217.898 3.7158C217.898 4.06602 217.821 4.36836 217.667 4.62269C217.512 4.87716 217.285 5.07526 216.985 5.21702L218.048 6.84345H216.747L215.834 5.44229H215.784H214.971V6.84345H213.669V1.98915H215.784C216.443 1.98915 216.96 2.14558 217.335 2.45841C217.71 2.77111 217.898 3.19033 217.898 3.7158ZM215.696 4.46642C215.988 4.46642 216.215 4.40173 216.378 4.27248C216.541 4.14323 216.622 3.95762 216.622 3.7158C216.622 3.47385 216.541 3.28623 216.378 3.15282C216.215 3.01926 215.988 2.95255 215.696 2.95255H214.958V4.46642H215.696Z"></path>
    </svg>
  );
}


