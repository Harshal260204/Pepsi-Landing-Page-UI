declare module "locomotive-scroll" {
  interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    on(event: string, callback: () => void): void;
    scrollTo(
      target: number,
      duration: number,
      delay: number
    ): void;
    update(): void;
    destroy(): void;
    scroll: {
      instance: {
        scroll: {
          y: number;
        };
      };
    };
  }
}
