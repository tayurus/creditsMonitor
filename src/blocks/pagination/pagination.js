$(document).ready(function(){
    let totalPagesCount = 5;
    let currPaginationIndex = 1;
    function initializePagination() {
               //предыдущую отключить
               $(".pagination__prev").addClass("disabledPaginationBtn");
               //первую отключить
               $(".pagination__first").addClass("disabledPaginationBtn");
               if (totalPagesCount === 1) {
                   $(".pagination__next").addClass("disabledPaginationBtn");
                   $(".pagination__last").addClass("disabledPaginationBtn");
               }

               $(".pagination__total").text(totalPagesCount);
           }

           /* !!!!!!!!!! Event Listeners !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */


           // first
           $(".pagination__first").click(function() {
               // индекс = 0
               currPaginationIndex = 1;
               // предыдущая = отключить
               $(".pagination__prev").addClass("disabledPaginationBtn");
               //первую отключить
               $(".pagination__first").addClass("disabledPaginationBtn");
               // если страниц > 0
               if (totalPagesCount > 0) {
                   //   следующая = включить
                   $(".pagination__next").removeClass("disabledPaginationBtn");
                   //    последняя = включить
                   $(".pagination__last").removeClass("disabledPaginationBtn");

                   $(".pagination__value").text(currPaginationIndex);
               }



           });

           // prev
           $(".pagination__prev").click(function() {
               //если не выключена
               if ($(this).hasClass("disabledPaginationBtn") == false) {
                   //индекс =  индекс - 1
                   currPaginationIndex = currPaginationIndex - 1;
                   //если индекс = 0
                   if (currPaginationIndex === 1) {
                       //эту отключить
                       $(".pagination__prev").addClass("disabledPaginationBtn");
                       //отключить первую
                       $(".pagination__first").addClass("disabledPaginationBtn");
                   }
                   // следующая = включить
                   $(".pagination__next").removeClass("disabledPaginationBtn");
                   // последняя = включить
                   $(".pagination__last").removeClass("disabledPaginationBtn");

                   $(".pagination__value").text(currPaginationIndex);
               }



           });

           //next
           $(".pagination__next").click(function() {
               //если не выключена
               if ($(this).hasClass("disabledPaginationBtn") == false) {
                   //индекс = индекс + 1
                   currPaginationIndex = currPaginationIndex + 1;
                   $(".pagination__value").text(currPaginationIndex);
                   //если индекс = общему числу
                   if (currPaginationIndex === totalPagesCount) {
                       //эту отключить
                       $(".pagination__next").addClass("disabledPaginationBtn");

                       //последнюю выключить
                       $(".pagination__last").addClass("disabledPaginationBtn");
                   }

                   //первую включить
                   $(".pagination__first").removeClass("disabledPaginationBtn");
                   $(".pagination__prev").removeClass("disabledPaginationBtn");

               }
           });


           // last
           $(".pagination__last").click(function() {
               //эту отключить
               $(".pagination__last").addClass("disabledPaginationBtn");
               currPaginationIndex = totalPagesCount;
               //   предыдущую включить
               $(".pagination__prev").removeClass("disabledPaginationBtn");
               //   следующую выключить
               $(".pagination__next").addClass("disabledPaginationBtn");
               //    первую включить
               $(".pagination__first").removeClass("disabledPaginationBtn");

               $(".pagination__value").text(currPaginationIndex);
           });


           initializePagination();
       });
