
EMCC := "../emscripten/emcc"

add.js: add.c
	$(EMCC) -s EXPORTED_FUNCTIONS='["_add"]' -o $@ $<
