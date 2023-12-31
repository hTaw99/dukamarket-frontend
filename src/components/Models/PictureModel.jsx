import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePictureModel } from "../../store/features/modelSlice";

export default function PictureModel() {
  const isPictureModelOpen = useSelector(
    (state) => state.model.isPictureModelOpen
  );
  const isQuickViewModelOpen = useSelector(
    (state) => state.model.isQuickViewModelOpen
  );
  const shownPicture = useSelector((state) => state.detail.shownPicture);
  const productToView = useSelector((state) => state.quickview.productToView);

  const dispatch = useDispatch();

  return (
    <Transition appear show={isPictureModelOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => dispatch(closePictureModel())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full w-screen items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <img
                  src={
                    isQuickViewModelOpen ? productToView.image : shownPicture
                  }
                  alt=""
                  className="w-full object-cover"
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
