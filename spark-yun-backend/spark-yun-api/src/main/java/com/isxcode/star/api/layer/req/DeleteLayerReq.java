package com.isxcode.star.api.layer.req;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class DeleteLayerReq {

    @Schema(title = "数据分层id", example = "sy_fd34e4a53db640f5943a4352c4d549b9")
    @NotEmpty(message = "id")
    private String id;
}
