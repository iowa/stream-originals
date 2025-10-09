import { AccessorWithLatest } from "@solidjs/router";
import { Title } from "@repo/common";
import { For, Suspense } from "solid-js";

interface StreamerListProps {
  titles: AccessorWithLatest<Title[] | undefined>
}

export default function StreamerList({ titles }: StreamerListProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ul class="list bg-base-100 shadow-lg">
          <For each={titles()}>
            {(title) => (
              <li class="ipc-metadata-list-summary-item">
                <div class="ipc-metadata-list-summary-item__c">
                  <div class="ipc-metadata-list-summary-item__tc"><span
                    class="ipc-metadata-list-summary-item__t ipc-btn--not-interactable"
                    aria-disabled="false"></span>
                    <div class="sc-ec40e84d-1 dwYbao dli-parent">
                      <div class="sc-ec40e84d-0 dTHKNo">
                        <div class="sc-d0224b4e-0 jfogmY dli-poster-container">
                          <div
                            class="ipc-poster ipc-poster--base ipc-poster--media-radius ipc-poster--wl-true ipc-poster--dynamic-width ipc-sub-grid-item ipc-sub-grid-item--span-2"
                            role="group">
                            <div
                              class="ipc-media ipc-media--poster-27x40 ipc-image-media-ratio--poster-27x40 ipc-media--media-radius ipc-media--base ipc-media--poster-s ipc-poster__poster-image ipc-media__img"
                              style="width:100%"><img alt="Kevin Spacey in House of Cards (2013)"
                                                      class="ipc-image" loading="lazy"
                                                      src="https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_QL75_UX90_CR0,0,90,133_.jpg"
                                                      srcset="https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_QL75_UX90_CR0,0,90,133_.jpg 90w, https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_QL75_UX135_CR0,0,135,200_.jpg 135w, https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_QL75_UX180_CR0,0,180,266_.jpg 180w"
                                                      sizes="50vw, (min-width: 480px) 34vw, (min-width: 600px) 26vw, (min-width: 1024px) 16vw, (min-width: 1280px) 16vw"
                                                      width="90"/></div>
                            <div data-testid="poster-watchlist-ribbon-add"
                                 class="ipc-watchlist-ribbon ipc-focusable ipc-watchlist-ribbon--m ipc-watchlist-ribbon--base ipc-watchlist-ribbon--onImage ipc-poster__watchlist-ribbon"
                                 aria-label="Add to Watchlist" role="button" tabindex="0">

                              <div class="ipc-watchlist-ribbon__icon" role="presentation">

                              </div>
                            </div>
                            <a class="ipc-lockup-overlay ipc-focusable"
                               href="/title/tt1856010/?ref_=ls_i_1"
                               aria-label="View title page for House of Cards">
                              <div class="ipc-lockup-overlay__screen"></div>
                            </a></div>
                        </div>
                        <div class="sc-15ac7568-0 jQHOho">
                          <div
                            class="ipc-title ipc-title--base ipc-title--title ipc-title--title--reduced ipc-title-link-no-icon ipc-title--on-textPrimary sc-87337ed2-2 dRlLYG dli-title with-margin">
                            <a href="/title/tt1856010/?ref_=ls_t_1" class="ipc-title-link-wrapper"
                               tabindex="0"><h3 class="ipc-title__text ipc-title__text--reduced">1.
                              House of Cards</h3></a></div>
                          <div class="sc-15ac7568-6 fqJJPW dli-title-metadata"><span
                            class="sc-15ac7568-7 cCsint dli-title-metadata-item">2013–2018</span><span
                            class="sc-15ac7568-7 cCsint dli-title-metadata-item">73 eps</span><span
                            class="sc-15ac7568-7 cCsint dli-title-metadata-item">TV-MA</span><span
                            class="sc-15ac7568-4 edbDRF dli-title-type-data">TV Series</span></div>
                          <span class="sc-15ac7568-1 jYDzG"><div
                            class="sc-17ce9e4b-0 ddMjUi sc-15ac7568-2 kzodIA dli-ratings-container"
                            data-testid="ratingGroup--container"><span aria-label="IMDb rating: 8.6"
                                                                       class="ipc-rating-star ipc-rating-star--base ipc-rating-star--imdb ratingGroup--imdb-rating"
                                                                       data-testid="ratingGroup--imdb-rating"><svg
                            width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                            class="ipc-icon ipc-icon--star-inline" viewBox="0 0 24 24"
                            fill="currentColor" role="presentation"><path
                            d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg><span
                            class="ipc-rating-star--rating">8.6</span><span
                            class="ipc-rating-star--voteCount"></span></span><button
                            aria-label="Rate House of Cards"
                            class="ipc-rate-button sc-17ce9e4b-1 flqkCx ratingGroup--user-rating ipc-rate-button--unrated ipc-rate-button--base"
                            data-testid="rate-button"><span
                            class="ipc-rating-star ipc-rating-star--base ipc-rating-star--rate"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            class="ipc-icon ipc-icon--star-border-inline" viewBox="0 0 24 24"
                            fill="currentColor" role="presentation"><path
                            d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path></svg><span
                            class="ipc-rating-star--rate">Rate</span></span></button></div><button
                            aria-pressed="false" data-testid="inline-watched-button-tt1856010"
                            class="ipc-btn ipc-btn--half-padding ipc-btn--left-align-content ipc-btn--default-height ipc-btn--core-base ipc-btn--theme-base ipc-btn--button-radius ipc-btn--on-accent2 ipc-text-button sc-43529d24-0 jmjwiI sc-15ac7568-3 iWHCKP"
                            tabindex="0" aria-label="Mark House of Cards as watched"
                            aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                       height="24"
                                                       class="ipc-icon ipc-icon--visibility ipc-btn__icon ipc-btn__icon--pre watched-button--icon ipc-btn__icon--disable-margin"
                                                       viewBox="0 0 24 24" fill="currentColor"
                                                       role="presentation"><path d="M0 0h24v24H0V0z"
                                                                                 fill="none"></path><path
                            d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"></path></svg><span
                            class="ipc-btn__text">Mark as watched</span></button></span></div>
                        <div class="sc-ec40e84d-2 eIlHxi dli-post-element">
                          <button data-testid="title-summary-prompt-button-info-icon"
                                  class="ipc-icon-button li-info-icon ipc-icon-button--base ipc-icon-button--onAccent2"
                                  title="See more information about House of Cards" tabindex="0"
                                  aria-label="See more information about House of Cards"
                                  aria-disabled="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 class="ipc-icon ipc-icon--info" viewBox="0 0 24 24"
                                 fill="currentColor" role="presentation">
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path
                                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="sc-9d52d06f-1 bDNbpf">
                        <div
                          class="ipc-html-content ipc-html-content--base sc-9d52d06f-0 bVMrTF title-description-plot-container"
                          role="presentation">
                          <div class="ipc-html-content-inner-div" role="presentation">A Congressman
                            works with his equally conniving wife to exact revenge on the people who
                            betrayed him.
                          </div>
                        </div>
                        <span><span><span class="sc-9d52d06f-3 chvWbP">Creator</span><span
                          class="sc-9d52d06f-2 cWCmUf title-description-credit"><a id="nm2802722"
                                                                                   class="ipc-link ipc-link--base"
                                                                                   tabindex="0"
                                                                                   aria-disabled="false"
                                                                                   href="/name/nm2802722/?ref_=ls_li_1_1">Beau Willimon</a></span></span><span><span
                          class="sc-9d52d06f-3 chvWbP">Stars</span><span
                          class="sc-9d52d06f-2 cWCmUf title-description-credit"><a id="nm0000228"
                                                                                   class="ipc-link ipc-link--base"
                                                                                   tabindex="0"
                                                                                   aria-disabled="false"
                                                                                   href="/name/nm0000228/?ref_=ls_li_2_1">Kevin Spacey</a></span><span
                          class="sc-9d52d06f-2 cWCmUf title-description-credit"><a id="nm0318703"
                                                                                   class="ipc-link ipc-link--base"
                                                                                   tabindex="0"
                                                                                   aria-disabled="false"
                                                                                   href="/name/nm0318703/?ref_=ls_li_2_2">Michel Gill</a></span><span
                          class="sc-9d52d06f-2 cWCmUf title-description-credit"><a id="nm0000705"
                                                                                   class="ipc-link ipc-link--base"
                                                                                   tabindex="0"
                                                                                   aria-disabled="false"
                                                                                   href="/name/nm0000705/?ref_=ls_li_2_3">Robin Wright</a></span></span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </For>
        </ul>
      </Suspense>
    </div>
  )
}